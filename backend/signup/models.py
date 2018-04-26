from django.db import models

# Create your models here.
class users(models.Model):
    email = models.CharField(max_length=100)
    hashPassword = models.CharField(max_length=300)
    email_authenticated = models.BooleanField()