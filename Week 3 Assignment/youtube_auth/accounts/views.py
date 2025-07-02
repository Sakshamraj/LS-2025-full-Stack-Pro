from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth.models import User
from .models import UserProfile
from .forms import RegisterForm, LoginForm
from django.utils.crypto import get_random_string

token_map = {}  # Simulate token storage (in-memory for demo)

def home(request):
    """
    Render the home page.
    If the user is authenticated, redirect to the dashboard.
    """
    return render(request, 'base.html')

@login_required
def dashboard(request):
    """
    Render the dashboard page.
    """
    return render(request, 'dashboard.html')

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
            token_map[token] = user.username
            messages.success(request, 'Registration successful! Please verify your email.')
            return redirect('verify', token=token)
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
    username = token_map.get(token)
    if username:
        user = User.objects.get(username=username)
        profile = UserProfile.objects.get(user=user)
        profile.email_verified = True
        profile.save()
        messages.success(request, 'Account Verified Successfully!')
        del token_map[token]
    else:
        messages.error(request, 'Invalid or expired verification link.')
    return render(request, 'verify.html')

