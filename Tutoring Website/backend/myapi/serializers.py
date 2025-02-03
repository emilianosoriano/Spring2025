# serializers.py
from rest_framework import serializers
from .models import User, Course, Progress

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'content']

class ProgressSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    course = CourseSerializer()

    class Meta:
        model = Progress
        fields = ['id', 'user', 'course', 'completed', 'progress_percentage']
