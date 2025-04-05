from django.urls import path
from .views import RegisterView, VerifyOTPView, ResendOTPView,SendLoginOTPView,VerifyLoginOTPView

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("verify-otp/", VerifyOTPView.as_view(), name="verify-otp"),
    path("resend-otp/", ResendOTPView.as_view(), name="resend-otp"),
    path('send-otp/', ResendOTPView.as_view(), name='send-otp'),
    path('send-login-otp/', SendLoginOTPView.as_view(), name='send_login_otp'),
    path('verify-login-otp/', VerifyLoginOTPView.as_view(), name='verify_login_otp'),
]
