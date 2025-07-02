from django.urls import path
from . import views
# This file defines the URL patterns for the accounts app, which includes authentication URLs.

urlpatterns = [
    path('', views.home, name='home'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('register/', views.register_view, name='register'),
    path('verify/<str:token>/', views.verify_view, name='verify'),
]