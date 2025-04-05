from django.shortcuts import render
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from twilio.rest import Client
import random
import os
from dotenv import load_dotenv

from .models import CustomUser

# Load env variables
load_dotenv()

TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = os.getenv("TWILIO_PHONE_NUMBER")

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

# In-memory OTP store
otp_storage = {}

# ------------------------ REGISTER VIEW ------------------------
class RegisterView(APIView):
    def post(self, request):
        phone = request.data.get("phone_number")
        username = request.data.get("username")
        password = request.data.get("password")

        if not all([phone, username, password]):
            return Response({"error": "Missing fields"}, status=status.HTTP_400_BAD_REQUEST)

        #  Check if phone number already registered
        if CustomUser.objects.filter(phone_number=phone).exists():
            return Response({"error": "This phone number is already registered."}, status=status.HTTP_400_BAD_REQUEST)

        # Save OTP data to memory
        otp = random.randint(100000, 999999)
        otp_storage[phone] = {
            "otp": str(otp),
            "username": username,
            "password": password
        }

        try:
            client.messages.create(
                body=f"Your OTP for LudoCash is {otp}",
                from_=TWILIO_PHONE_NUMBER,
                to=phone
            )
            return Response({"message": "OTP sent!"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# ------------------------ VERIFY OTP VIEW ------------------------
class VerifyOTPView(APIView):
    def post(self, request):
        otp_input = request.data.get("otp")

        if not otp_input:
            return Response({"error": "OTP is required."}, status=status.HTTP_400_BAD_REQUEST)

        # Loop through all stored OTPs to find match
        matched_phone = None
        for phone, data in otp_storage.items():
            if data["otp"] == otp_input:
                matched_phone = phone
                break

        if matched_phone:
            otp_data = otp_storage[matched_phone]
            username = otp_data["username"]
            password = otp_data["password"]

            #  Final check before user creation
            if not CustomUser.objects.filter(phone_number=matched_phone).exists():
                CustomUser.objects.create_user(
                    phone_number=matched_phone,
                    username=username,
                    password=password
                )

            # Delete used OTP
            del otp_storage[matched_phone]

            return Response({"message": "OTP verified successfully!"}, status=status.HTTP_200_OK)

        return Response({"error": "Invalid OTP"}, status=status.HTTP_400_BAD_REQUEST)

# ------------------------ RESEND OTP VIEW ------------------------
class ResendOTPView(APIView):
    def post(self, request):
        phone = request.data.get("phone_number")

        if not phone:
            return Response({"error": "Phone number required"}, status=status.HTTP_400_BAD_REQUEST)

        #  Check if number is already registered (stop resending)
        if CustomUser.objects.filter(phone_number=phone).exists():
            return Response({"error": "This number is already registered."}, status=status.HTTP_400_BAD_REQUEST)

        otp_record = otp_storage.get(phone)
        if not otp_record:
            return Response({"error": "User not found or not registered"}, status=status.HTTP_404_NOT_FOUND)

        otp = str(random.randint(100000, 999999))
        otp_record["otp"] = otp  # Update OTP

        try:
            client.messages.create(
                body=f"🔐 Your new OTP for LudoCash is: {otp}",
                from_=TWILIO_PHONE_NUMBER,
                to=phone
            )
            return Response({"message": "OTP resent successfully!"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": "Failed to send OTP. Try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# Login method
# ------------------------ SEND LOGIN OTP ------------------------
class SendLoginOTPView(APIView):
    def post(self, request):
        phone = request.data.get("phone_number")

        if not phone:
            return Response({"error": "Phone number is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Only send OTP if phone is registered
        if not CustomUser.objects.filter(phone_number=phone).exists():
            return Response({"error": "Phone number not registered."}, status=status.HTTP_404_NOT_FOUND)

        otp = str(random.randint(100000, 999999))
        otp_storage[phone] = otp

        try:
            client.messages.create(
                body=f"Your LudoCash login OTP is: {otp}",
                from_=TWILIO_PHONE_NUMBER,
                to=phone
            )
            return Response({"message": "OTP sent successfully"})
        except Exception as e:
            return Response({"error": str(e)}, status=500)


# ------------------------ VERIFY LOGIN OTP ------------------------
class VerifyLoginOTPView(APIView):
    def post(self, request):
        phone = request.data.get("phone_number")
        otp_input = request.data.get("otp")

        if not phone or not otp_input:
            return Response({"error": "Phone and OTP required"}, status=400)

        if otp_storage.get(phone) == otp_input:
            user = CustomUser.objects.get(phone_number=phone)
            del otp_storage[phone]
            return Response({"message": "Login successful", "user_id": user.id})
        
        return Response({"error": "Invalid OTP"}, status=401)

