# Create your views here.
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User, Course, Progress
from .serializers import UserSerializer, CourseSerializer, ProgressSerializer
from rest_framework import status

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world, Backend!!!'})