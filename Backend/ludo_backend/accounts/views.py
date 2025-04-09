from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken

from twilio.rest import Client
import random
import os
from dotenv import load_dotenv

from .models import CustomUser

# ------------------------ Load Twilio Credentials ------------------------
load_dotenv()
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = os.getenv("TWILIO_PHONE_NUMBER")

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

# ------------------------ In-memory OTP Storage ------------------------
register_otp_storage = {}
login_otp_storage = {}

# ✅ Helper function to send OTP via Twilio
def send_otp_via_twilio(phone_number, otp):
    message = client.messages.create(
        body=f"🔐 Your OTP for LudoCash is: {otp}",
        from_=TWILIO_PHONE_NUMBER,
        to=phone_number
    )
    return message.sid

# ------------------------ REGISTER VIEW ------------------------
class RegisterView(APIView):
    def post(self, request):
        phone = request.data.get("phone_number")
        username = request.data.get("username")
        password = request.data.get("password")

        if not all([phone, username, password]):
            return Response({"error": "Missing fields"}, status=status.HTTP_400_BAD_REQUEST)

        if CustomUser.objects.filter(phone_number=phone).exists():
            return Response({"error": "This phone number is already registered."}, status=status.HTTP_400_BAD_REQUEST)

        otp = str(random.randint(100000, 999999))
        register_otp_storage[phone] = {
            "otp": otp,
            "username": username,
            "password": password
        }

        try:
            send_otp_via_twilio(phone, otp)
            return Response({"message": "OTP sent!"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# ------------------------ VERIFY REGISTER OTP ------------------------
class VerifyOTPView(APIView):
    def post(self, request):
        otp_input = request.data.get("otp")

        if not otp_input:
            return Response({"error": "OTP is required."}, status=status.HTTP_400_BAD_REQUEST)

        matched_phone = None
        for phone, data in register_otp_storage.items():
            if data["otp"] == otp_input:
                matched_phone = phone
                break

        if matched_phone:
            data = register_otp_storage[matched_phone]
            username = data["username"]
            password = data["password"]

            if not CustomUser.objects.filter(phone_number=matched_phone).exists():
                CustomUser.objects.create_user(
                    phone_number=matched_phone,
                    username=username,
                    password=password
                )

            del register_otp_storage[matched_phone]

            return Response({"message": "OTP verified successfully!"}, status=status.HTTP_200_OK)

        return Response({"error": "Invalid OTP"}, status=status.HTTP_400_BAD_REQUEST)

# ------------------------ RESEND REGISTER OTP ------------------------
class ResendOTPView(APIView):
    def post(self, request):
        phone = request.data.get("phone_number")

        if not phone:
            return Response({"error": "Phone number required"}, status=status.HTTP_400_BAD_REQUEST)

        if CustomUser.objects.filter(phone_number=phone).exists():
            return Response({"error": "This number is already registered."}, status=status.HTTP_400_BAD_REQUEST)

        otp_record = register_otp_storage.get(phone)
        if not otp_record:
            return Response({"error": "User not found or not registered"}, status=status.HTTP_404_NOT_FOUND)

        new_otp = str(random.randint(100000, 999999))
        otp_record["otp"] = new_otp  # Update OTP

        try:
            send_otp_via_twilio(phone, new_otp)
            return Response({"message": "OTP resent successfully!"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# ------------------------ SEND LOGIN OTP ------------------------
@api_view(['POST'])
def send_login_otp(request):
    phone_number = request.data.get('phone_number')

    if not phone_number:
        return Response({'error': 'Phone number is required'}, status=400)

    if not CustomUser.objects.filter(phone_number=phone_number).exists():
        return Response({'error': 'Phone number not registered'}, status=400)

    otp = str(random.randint(100000, 999999))
    login_otp_storage[phone_number] = otp

    formatted_phone = f"+91{phone_number}"  # Twilio expects this

    try:
        send_otp_via_twilio(formatted_phone, otp)
        return Response({'message': 'OTP sent successfully'}, status=200)
    except Exception as e:
        return Response({'error': str(e)}, status=500)
# ------------------------ VERIFY LOGIN OTP ------------------------
@api_view(['POST'])
def verify_login_otp(request):
    phone_number = request.data.get('phone_number')
    otp = request.data.get('otp')

    if not phone_number or not otp:
        return Response({'error': 'Phone number and OTP required'}, status=400)

    if login_otp_storage.get(phone_number) != otp:
        return Response({'error': 'Invalid OTP'}, status=400)

    try:
        user = CustomUser.objects.get(phone_number=phone_number)
        refresh = RefreshToken.for_user(user)
        del login_otp_storage[phone_number]

        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'username': user.username,
        }, status=200)
    except CustomUser.DoesNotExist:
        return Response({'error': 'User not found'}, status=404)
