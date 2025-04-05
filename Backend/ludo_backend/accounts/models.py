from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, phone_number, username=None, password=None):
        if not phone_number:
            raise ValueError('Users must have a phone number')
        if not username:
            raise ValueError('Users must have a username')

        user = self.model(phone_number=phone_number, username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, phone_number, username=None, password=None):
        user = self.create_user(phone_number, username, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user

class CustomUser(AbstractBaseUser, PermissionsMixin):
    phone_number = models.CharField(max_length=15, unique=True)
    username = models.CharField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.phone_number
