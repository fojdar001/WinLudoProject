from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Subscriber



@api_view(['GET'])
def welcome_message(request):
    return Response({"message": "Welcome to Ludo Game"})


@api_view(['POST'])
def chat_response(request):
    user_msg = request.data.get("message", "").lower()

    if "hi" in user_msg or "hello" in user_msg:
        reply = "Hello! How can I help you today?"
    elif "game" in user_msg:
        reply = "You can play Ludo and win real cash!"
    elif "bye" in user_msg:
        reply = "Goodbye! Have a great day!"
    else:
        reply = "Sorry, I didn't understand that. Can you rephrase?"

    return Response({"reply": reply})


@api_view(['POST'])
def subscribe_email(request):
    email = request.data.get('email', '').strip().lower()

    if not email:
        return Response({"error": "Email is required."}, status=400)

    if Subscriber.objects.filter(email=email).exists():
        return Response({"message": "You're already subscribed."})

    Subscriber.objects.create(email=email)
    return Response({"message": "Thank you for subscribing!"})