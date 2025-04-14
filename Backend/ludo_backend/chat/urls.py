from django.urls import path
from .views import welcome_message,chat_response,subscribe_email

urlpatterns = [
    path('welcome/', welcome_message),
    path('reply/', chat_response),
    path('subscribe/', subscribe_email),
]
