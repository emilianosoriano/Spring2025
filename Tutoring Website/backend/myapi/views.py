# Create your views here.
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Lesson, Submission
from rest_framework import status
from django.http import JsonResponse

lessons_data = [
    {"id": 1, "title": "Variables and Data Types", "description": "Learn about variables."},
    {"id": 2, "title": "Control Structures", "description": "Understand control flow."},
    {"id": 3, "title": "Functions and Methods", "description": "Master functions."},
    {"id": 4, "title": "Object-Oriented Programming", "description": "Dive into OOP."},
]

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world, Backend!!!'})

# @api_view(['GET'])
# def get_lessons(request, slug):
#


@api_view(['POST'])
def submit_code(request):
    code = request.data.get('code', '')

    if not code.strip():
        return JsonResponse({'error': 'No code provided!'}, status=status.HTTP_400_BAD_REQUEST)

    # Dummy feedback
    feedback = "Your code looks fine, but consider improving variable names."

    return JsonResponse({'feedback': feedback, 'submitted_code': code}, status=status.HTTP_200_OK)
