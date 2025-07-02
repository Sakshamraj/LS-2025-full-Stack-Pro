from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth.models import User
from .models import UserProfile
from .forms import RegisterForm, LoginForm
from django.core.mail import send_mail
from django.utils.crypto import get_random_string

def home(request):
    """
    Render the home page.
    If the user is authenticated, redirect to the dashboard.
    """
    return render(request, 'base.html')

@login_required
def dashboard(request):
    """
    Render the dashboard page and handle user preferences for list_display, search_fields, ordering, and display_type.
    Also handle editing the email_ID field.
    """
    user_profile = UserProfile.objects.get(user=request.user)
    edit_mode = False
    if request.method == 'POST':
        if 'edit_prefs' in request.POST:
            edit_mode = True
        elif 'save_prefs' in request.POST:
            user_profile.display_type = request.POST.get('display_type', 'table')
            user_profile.ordering = request.POST.get('ordering', '-created_at')
            user_profile.save()
            messages.success(request, 'Preferences saved!')
        elif 'cancel_edit' in request.POST:
            edit_mode = False
    else:
        edit_mode = False
    display_type = user_profile.display_type
    ordering = user_profile.ordering
    return render(request, 'dashboard.html', {
        'display_type': display_type,
        'ordering': ordering,
        'edit_mode': edit_mode,
        'user_profile': user_profile,
    })

def login_view(request):
    """
    Render the login page.
    If the user is already authenticated, redirect to the dashboard.
    """
    if request.user.is_authenticated:
        return redirect('dashboard')
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            # Check if the user's email is verified
            try:
                profile = UserProfile.objects.get(user=user)
                if not profile.email_verified:
                    messages.error(request, 'Please verify your email before logging in.')
                    return render(request, 'login.html', {'form': form})
            except UserProfile.DoesNotExist:
                messages.error(request, 'User profile not found. Contact support.')
                return render(request, 'login.html', {'form': form})
            login(request, user)
            messages.success(request, 'Login successful!')
            return redirect('dashboard')
        else:
            messages.error(request, 'Invalid username or password.')
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})

def logout_view(request):
    """
    Log out the user and redirect to the login page.
    """
    logout(request)
    messages.success(request, 'Logged out successfully!')
    return redirect('login')

def register_view(request):
    """
    Render the registration page.
    If the user is already authenticated, redirect to the dashboard.
    """
    if request.user.is_authenticated:
        return redirect('dashboard')
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = True
            user.save()
            UserProfile.objects.create(user=user, email_verified=False)
            # Simulate sending verification email
            token = get_random_string(32)
            user_profile.verification_token = token
            user_profile.save()
            verification_link = request.build_absolute_uri(f'/verify/{token}/')
            # Simulate email by printing to console
            print(f'<div class="alert alert-success" role="alert">Simulated email verification link: <a href="{verification_link}">{verification_link}</a></div>')
            messages.success(request, 'Registration successful! Please verify your email.')
            # Redirect to the verification page directly (simulate email click)
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = RegisterForm()
    return render(request, 'register.html', {'form': form})

def verify_view(request, token=None):
    """
    Render the verification page.
    If the user is already authenticated, redirect to the dashboard.
    """
    try:
        profile = UserProfile.objects.get(verification_token=token)
        if not profile.email_verified:
            profile.email_verified = True
            profile.save()
        messages.success(request, 'Account Verified Successfully!')
        return render(request, 'verify.html')  # Show success
    except UserProfile.DoesNotExist:
        return render(request, 'verify.html', {'error': 'Invalid or expired token.'})

