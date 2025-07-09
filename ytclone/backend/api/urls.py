# API URL routing for API app.
from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('register/', views.RegisterView.as_view()),
    path('login/', views.TokenObtainPairView.as_view()),
    path('upload/', views.VideoUploadView.as_view()),
    path('videos/', views.VideoListView.as_view()),
    path('videos/<int:pk>/', views.VideoDetailView.as_view()),
]
