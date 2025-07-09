# DRF Serializers for API app.
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Video

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class VideoSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    likes_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Video
        fields = '__all__'

    def get_likes_count(self, obj):
        return obj.likes.count()
