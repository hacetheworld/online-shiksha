from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
# from django.models import models
from django import forms


class RegisterForm(UserCreationForm):
    username = forms.CharField(max_length=50)

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]
