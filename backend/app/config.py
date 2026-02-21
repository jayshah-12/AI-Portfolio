from google import genai
from dotenv import load_dotenv
import os
from supabase import create_client

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

# Gemini client
client = genai.Client(api_key=GEMINI_API_KEY)

# Supabase client
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)