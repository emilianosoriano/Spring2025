from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('courses/', views.course_list, name='course-list'),
    path('courses/<int:course_id>/', views.course_detail, name='course-detail'),
    path('progress/create/', views.create_progress, name='create-progress'),
]