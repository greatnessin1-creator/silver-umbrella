# plan.md

## 1. Objectives
- Deliver a standalone, elegant & luxurious React landing page that visually matches/redesigns the current Pura Livn Shopify storefront.
- Highlight promo: **“Save 10% with code FIRSTORDER10”** and **Free Shipping**.
- Showcase mission, featured products (real Shopify links), benefits, testimonials, blog highlights.
- Implement a simple FastAPI + MongoDB **contact form API** (store submissions, basic validation, spam mitigation).
- Ensure fast load, responsive layout, strong typography, and accessible UI.

## 2. Implementation Steps

### Phase 1: Core Function (POC) — Contact Form API (isolation)
**User stories**
1. As a visitor, I want to submit the contact form and see a clear success message.
2. As a visitor, I want field-level validation errors so I can fix mistakes quickly.
3. As the site owner, I want contact submissions stored in MongoDB so I can respond later.
4. As the site owner, I want spam reduced (honeypot + basic rate limit) so inbox isn’t flooded.
5. As a developer, I want a simple health check endpoint so I can verify backend availability.

**Steps**
- Define data model: name, email, phone(optional), comment, createdAt, metadata (ip/userAgent).
- Create FastAPI endpoints:
  - `GET /api/health`
  - `POST /api/contact` (validate + persist)
- Add basic spam controls: honeypot field + per-IP rate limit (lightweight) + CORS allowlist for frontend origin.
- Write a minimal script or curl-based test to POST valid/invalid payloads; verify MongoDB writes.
- Fix until stable (error handling, validation messages, CORS correctness).

**Exit criteria**
- Contact submissions reliably persist; API returns predictable JSON for success and validation errors.

### Phase 2: V1 App Development — Landing Page + Backend hookup
**User stories**
1. As a visitor, I want to immediately understand the brand promise from the hero section.
2. As a visitor, I want to see featured products with prices and click through to Shopify to buy.
3. As a visitor, I want to understand benefits quickly via scannable icons/feature cards.
4. As a visitor, I want to trust the brand via testimonials and blog highlights.
5. As a visitor, I want to contact support easily and receive confirmation my message was sent.

**Frontend build (React)**
- Establish design system tokens (luxury theme):
  - Colors: deep charcoal/ivory + **gold accents**
  - Typography: serif display for headings + clean sans for body
  - Components: buttons (primary gold), cards, section headers, input styling
- Page sections (single-page scroll):
  - Top promo bar: **FIRSTORDER10** + Free Shipping
  - Hero: “Beauty Starts with Skincare” + primary CTA (Shop Best Seller)
  - Mission block (brand statement)
  - Featured products grid (4 items) with **real Shopify links**:
    1) Anti Cellulite Massage Oil ($24.99)
    2) Microcurrent Face Lifting Device ($39.99)
    3) 2-in-1 Cellulite Massager Roller ($39.99)
    4) Sculpting Oil + Massager Kit
  - Benefits section (3 key benefits from site)
  - “Designed to Support…” combo section with CTA to kit
  - Testimonials carousel/stacked cards (Jessica, Maria, Melissa)
  - Blog highlights (2 cards) linking to Shopify blog URLs
  - Contact form (wired to backend)
  - Footer (brand, links, policy placeholders)
- SEO basics: title/description, OpenGraph tags, structured heading order.
- Performance: optimized images, lazy-loading below the fold.

**Backend build (FastAPI + MongoDB)**
- Move POC code into app structure (routers, schemas, db module).
- Add environment configuration (Mongo URI, CORS origins).

**Testing (end of phase)**
- Run one end-to-end pass: landing loads → product links open → contact submit success/failure states → confirm record in Mongo.
- Fix layout issues (mobile, tablet, desktop) and error states.

### Phase 3: Refinement + Production Polish
**User stories**
1. As a visitor on mobile, I want the page to feel premium and easy to scroll/read.
2. As a visitor, I want smooth interactions (hover states, subtle animations) that feel luxurious.
3. As a visitor, I want accessibility support (keyboard nav, contrast, focus states).
4. As the site owner, I want lightweight admin visibility of contact submissions (basic endpoint or simple list page).
5. As a developer, I want consistent error logging so issues are diagnosable.

**Steps**
- UI polish: micro-animations (fade/slide), refined spacing, improved hero imagery, consistent iconography.
- Accessibility: labels, aria, focus rings, contrast checks.
- Add optional `GET /api/contact/recent` (protected by simple token/env secret) **or** provide Mongo query instructions (choose minimal).
- Improve spam controls if needed (stricter rate limits, email regex, block obvious bots).
- Second end-to-end testing round.

### Phase 4: Optional Enhancements (post-v1, only if requested)
**User stories**
1. As a visitor, I want a sticky “Shop Now” CTA so I can purchase at any time.
2. As a visitor, I want more product detail modals without leaving the page.
3. As the brand, I want email notifications when a contact form is submitted.
4. As a marketer, I want analytics events for CTA clicks.
5. As a visitor, I want an FAQ section to answer common questions quickly.

**Steps**
- Add sticky CTA / section navigation.
- Add product quick-view modals.
- Add email notification integration (SendGrid/Mailgun) + webhook-style resilience (would require a new POC).
- Add analytics hooks.
- Add FAQ.

## 3. Next Actions
- Confirm deployment target(s) and domains (frontend + backend) for CORS allowlist.
- Implement Phase 1 contact API POC and validate Mongo persistence.
- Build Phase 2 landing page UI and wire to the proven API.
- Run end-to-end test and iterate on luxury styling.

## 4. Success Criteria
- Landing page matches a premium/luxury feel (serif headers, gold accents, polished spacing) and is responsive.
- Promo and free shipping messaging are clearly visible above the fold.
- All product and blog CTAs link correctly to the provided Shopify URLs.
- Contact form:
  - Validates inputs, shows clear success/error states
  - Persists submissions in MongoDB
  - Basic spam mitigation is in place
- No major layout/UX regressions across mobile/desktop; Lighthouse-style performance is acceptable for an image-heavy landing page.