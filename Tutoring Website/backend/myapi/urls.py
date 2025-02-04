from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('submit-code/', views.submit_code, name='submit_code'),
]