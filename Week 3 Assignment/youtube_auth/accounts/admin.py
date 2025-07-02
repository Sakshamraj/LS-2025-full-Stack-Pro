# Django Admin Setup (Mandatory)
# This is often ignored — don’t skip it!
# Registered all relevant models in admin.py
# Added:
# - list_display
# - search_fields
# - ordering
# Organized fieldsets properly
# Optional: Customized admin CSS/colors for cleaner look

from django.contrib import admin
from .models import UserProfile, OtherModel  # Add all relevant models here

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'email_verified', 'created_at')  # Adjust fields as per your model
    search_fields = ('user__username', 'user__email')
    ordering = ('-created_at',)
    fieldsets = (
        ('User Info', {
            'fields': ('user', 'email_verified')
        }),
        ('Timestamps', {
            'fields': ('created_at',)
        }),
    )

    # Optional: Custom admin CSS (requires static files setup)
    class Media:
        css = {
            'all': ('admin/custom_admin.css',)
        }

@admin.register(OtherModel)
class OtherModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'created_at')  # Example fields
    search_fields = ('name',)
    ordering = ('-created_at',)
    fieldsets = (
        ('Main Info', {
            'fields': ('name',)
        }),
        ('Timestamps', {
            'fields': ('created_at',)
        }),
    )