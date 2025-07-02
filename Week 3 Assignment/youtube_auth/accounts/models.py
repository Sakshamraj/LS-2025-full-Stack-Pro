from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email_verified = models.BooleanField(default=False)
    verification_token = models.CharField(max_length=64, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    email_ID = models.TextField(max_length=180, blank=True, null=True)

    last_login = models.DateTimeField(auto_now=True)
    email_ID = models.TextField(max_length=180, blank=True, null=True)
    search_fields = models.TextField(
        blank=True,
        help_text="Comma-separated fields the user prefers to search by, including those searched via the navbar."
    )
    display_type = models.CharField(max_length=20, default='table')
    ordering = models.CharField(max_length=50, default='-created_at')

    def __str__(self):
        return self.user.username

# Example for another model (if needed)
class OtherModel(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
