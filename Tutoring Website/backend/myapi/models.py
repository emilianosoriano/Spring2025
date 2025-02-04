from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class CustomUser(AbstractUser):
    bio = models.TextField(max_length=500, blank=True, null=True)

class Lesson(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    content = models.TextField()
    sample_input = models.TextField(max_length=500)
    sample_output = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Submission(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    code = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)
    ai_feedback = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Submission by {self.user.username} for {self.lesson.title}"