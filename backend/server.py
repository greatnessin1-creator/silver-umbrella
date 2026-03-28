from fastapi import FastAPI, APIRouter, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import re

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'puralivn_db')]

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Rate limiting storage (in-memory, simple approach)
rate_limit_store = {}

# --- Models ---
class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = ""
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None

class ContactFormInput(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: str = Field(..., min_length=1, max_length=200)
    phone: Optional[str] = Field(default="", max_length=30)
    message: str = Field(..., min_length=1, max_length=2000)
    honeypot: Optional[str] = Field(default="")  # Spam trap

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None

# --- Helper ---
def validate_email(email: str) -> bool:
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))

def serialize_doc(doc):
    """Serialize MongoDB document for JSON response"""
    if doc is None:
        return None
    result = {}
    for key, value in doc.items():
        if key == '_id':
            continue
        elif isinstance(value, datetime):
            result[key] = value.isoformat()
        else:
            result[key] = value
    return result

# --- Routes ---
@api_router.get("/")
async def root():
    return {"message": "Pura Livn API"}

@api_router.get("/health")
async def health_check():
    try:
        await client.admin.command('ping')
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        return {"status": "unhealthy", "database": str(e)}

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(input_data: ContactFormInput, request: Request):
    # Honeypot check - if filled, it's likely a bot
    if input_data.honeypot and input_data.honeypot.strip():
        # Return success to not alert the bot, but don't save
        return ContactResponse(success=True, message="Thank you for your message!")
    
    # Validate email
    if not validate_email(input_data.email):
        return ContactResponse(success=False, message="Please enter a valid email address.")
    
    # Validate name
    if not input_data.name.strip():
        return ContactResponse(success=False, message="Please enter your name.")
    
    # Validate message
    if not input_data.message.strip():
        return ContactResponse(success=False, message="Please enter a message.")

    # Simple rate limiting (5 submissions per IP per hour)
    client_ip = request.client.host if request.client else "unknown"
    now = datetime.now(timezone.utc)
    
    if client_ip in rate_limit_store:
        submissions = rate_limit_store[client_ip]
        # Clean old entries (older than 1 hour)
        submissions = [s for s in submissions if (now - s).total_seconds() < 3600]
        rate_limit_store[client_ip] = submissions
        
        if len(submissions) >= 5:
            return ContactResponse(success=False, message="Too many submissions. Please try again later.")
        
        submissions.append(now)
    else:
        rate_limit_store[client_ip] = [now]
    
    # Create submission
    submission = ContactSubmission(
        name=input_data.name.strip(),
        email=input_data.email.strip().lower(),
        phone=input_data.phone.strip() if input_data.phone else "",
        message=input_data.message.strip(),
        ip_address=client_ip,
        user_agent=request.headers.get("user-agent", "")
    )
    
    doc = submission.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    try:
        await db.contact_submissions.insert_one(doc)
        logger.info(f"Contact form submitted by {submission.email}")
        return ContactResponse(
            success=True, 
            message="Thank you! We'll get back to you soon.",
            id=submission.id
        )
    except Exception as e:
        logger.error(f"Failed to save contact form: {e}")
        return ContactResponse(success=False, message="Something went wrong. Please try again.")

@api_router.get("/contact/submissions")
async def get_contact_submissions():
    """Get recent contact submissions (for admin)"""
    submissions = await db.contact_submissions.find(
        {}, {"_id": 0}
    ).sort("created_at", -1).to_list(100)
    return [serialize_doc(s) for s in submissions]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
