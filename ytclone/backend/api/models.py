# Models for API app (User, Video, etc.).
from django.db import models
from django.contrib.auth.models import User

class Video(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    video_file = models.FileField(upload_to='videos/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(User, related_name='liked_videos', blank=True)
    watch_later = models.ManyToManyField(User, related_name='watch_later_videos', blank=True)

    def __str__(self):
        return self.title
