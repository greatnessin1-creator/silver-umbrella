import requests
import sys
import json
from datetime import datetime

class PuraLivnAPITester:
    def __init__(self, base_url="https://livn-showcase.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            result = {
                "test_name": name,
                "endpoint": endpoint,
                "method": method,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response_data": None,
                "error": None
            }

            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    result["response_data"] = response.json()
                except:
                    result["response_data"] = response.text
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    result["response_data"] = response.json()
                except:
                    result["response_data"] = response.text

            self.test_results.append(result)
            return success, result["response_data"]

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            result = {
                "test_name": name,
                "endpoint": endpoint,
                "method": method,
                "expected_status": expected_status,
                "actual_status": None,
                "success": False,
                "response_data": None,
                "error": str(e)
            }
            self.test_results.append(result)
            return False, {}

    def test_health_endpoint(self):
        """Test health check endpoint"""
        return self.run_test(
            "Health Check",
            "GET",
            "health",
            200
        )

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test(
            "Root API",
            "GET",
            "",
            200
        )

    def test_contact_form_valid_submission(self):
        """Test contact form with valid data"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "555-123-4567",
            "message": "This is a test message for the contact form.",
            "honeypot": ""
        }
        return self.run_test(
            "Contact Form - Valid Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )

    def test_contact_form_missing_name(self):
        """Test contact form with missing name"""
        test_data = {
            "name": "",
            "email": "test@example.com",
            "phone": "555-123-4567",
            "message": "This is a test message.",
            "honeypot": ""
        }
        return self.run_test(
            "Contact Form - Missing Name",
            "POST",
            "contact",
            422,  # API returns 422 for validation errors
            data=test_data
        )

    def test_contact_form_invalid_email(self):
        """Test contact form with invalid email"""
        test_data = {
            "name": "Test User",
            "email": "invalid-email",
            "phone": "555-123-4567",
            "message": "This is a test message.",
            "honeypot": ""
        }
        return self.run_test(
            "Contact Form - Invalid Email",
            "POST",
            "contact",
            200,  # API returns 200 with error message
            data=test_data
        )

    def test_contact_form_missing_message(self):
        """Test contact form with missing message"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "555-123-4567",
            "message": "",
            "honeypot": ""
        }
        return self.run_test(
            "Contact Form - Missing Message",
            "POST",
            "contact",
            422,  # API returns 422 for validation errors
            data=test_data
        )

    def test_contact_form_honeypot(self):
        """Test contact form with honeypot filled (bot detection)"""
        test_data = {
            "name": "Bot User",
            "email": "bot@example.com",
            "phone": "555-123-4567",
            "message": "This is a bot message.",
            "honeypot": "I am a bot"
        }
        return self.run_test(
            "Contact Form - Honeypot Detection",
            "POST",
            "contact",
            200,  # API returns 200 but doesn't save
            data=test_data
        )

def main():
    print("🚀 Starting Pura Livn API Tests...")
    print("=" * 50)
    
    # Setup
    tester = PuraLivnAPITester()

    # Run basic endpoint tests
    print("\n📡 Testing Basic Endpoints...")
    tester.test_health_endpoint()
    tester.test_root_endpoint()

    # Run contact form tests
    print("\n📝 Testing Contact Form...")
    tester.test_contact_form_valid_submission()
    tester.test_contact_form_missing_name()
    tester.test_contact_form_invalid_email()
    tester.test_contact_form_missing_message()
    tester.test_contact_form_honeypot()

    # Print results summary
    print("\n" + "=" * 50)
    print(f"📊 Test Results Summary:")
    print(f"   Tests Run: {tester.tests_run}")
    print(f"   Tests Passed: {tester.tests_passed}")
    print(f"   Tests Failed: {tester.tests_run - tester.tests_passed}")
    print(f"   Success Rate: {(tester.tests_passed / tester.tests_run * 100):.1f}%")

    # Print detailed results
    print("\n📋 Detailed Results:")
    for result in tester.test_results:
        status = "✅ PASS" if result["success"] else "❌ FAIL"
        print(f"   {status} - {result['test_name']}")
        if not result["success"]:
            if result["error"]:
                print(f"      Error: {result['error']}")
            else:
                print(f"      Expected: {result['expected_status']}, Got: {result['actual_status']}")
                if result["response_data"]:
                    print(f"      Response: {result['response_data']}")

    # Save results to file
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    results_file = f"/app/test_reports/backend_test_results_{timestamp}.json"
    
    try:
        with open(results_file, 'w') as f:
            json.dump({
                "timestamp": timestamp,
                "summary": {
                    "tests_run": tester.tests_run,
                    "tests_passed": tester.tests_passed,
                    "tests_failed": tester.tests_run - tester.tests_passed,
                    "success_rate": round(tester.tests_passed / tester.tests_run * 100, 1)
                },
                "test_results": tester.test_results
            }, f, indent=2)
        print(f"\n💾 Results saved to: {results_file}")
    except Exception as e:
        print(f"\n⚠️  Failed to save results: {e}")

    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())