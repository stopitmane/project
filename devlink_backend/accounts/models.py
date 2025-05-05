from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    bio = models.TextField(blank=True)
    skills = models.CharField(max_length=255, blank=True)
    profile_image = models.ImageField(upload_to='profiles/', blank=True)
