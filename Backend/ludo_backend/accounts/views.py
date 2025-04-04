from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from twilio.rest import Client
import random
import os
from dotenv import load_dotenv  # ✅ dotenv import kiya

# 🔹 Load environment variables
load_dotenv()  # ✅ .env file load ho rahi hai

# 🔹 Twilio Credentials
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = os.getenv("TWILIO_PHONE_NUMBER")  # ✅ Extra space hata diya

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

# 🔸 Temporary OTP Storage (for now)
otp_storage = {}

class RegisterView(APIView):
    def post(self, request):
        phone = request.data.get("phone_number")
        username = request.data.get("username")
        password = request.data.get("password")

        if not all([phone, username, password]):
            return Response({"error": "Missing fields"}, status=status.HTTP_400_BAD_REQUEST)

        # 🔹 Generate 6-digit OTP
        otp = random.randint(100000, 999999)
        otp_storage[phone] = otp  # Store temporarily

        # 🔹 Send OTP via Twilio
        try:
            message = client.messages.create(
                body=f"Your OTP for LudoCash is {otp}",
                from_=TWILIO_PHONE_NUMBER,
                to=phone
            )
            return Response({"message": "OTP sent successfully!"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
