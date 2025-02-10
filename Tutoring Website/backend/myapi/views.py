# Create your views here.
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.utils.text import slugify
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

@api_view(['GET'])
def get_lesson(request, slug):
    # Normalize the slug for matching
    for lesson in lessons_data:
        if slugify(lesson["title"]) == slug:
            return Response(lesson)
    return Response({"error": "Lesson not found"}, status=404)


@api_view(['POST'])
def submit_code(request):
    try:
        # Extract the code from the request
        code = request.data.get('code', '').strip()

        if not code:
            return Response({'error': 'No code provided!'}, status=status.HTTP_400_BAD_REQUEST)

        # AI Integration placeholder (use an AI model API here)
        # For example, integrate OpenAI's API
        # ai_feedback = call_ai_model(code)

        # Dummy feedback
        feedback = "Your code looks fine, but consider improving variable names."

        # Construct the response
        response_data = {
            'feedback': feedback,
            'submitted_code': code,
        }

        print(response_data)
        return JsonResponse(response_data, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
