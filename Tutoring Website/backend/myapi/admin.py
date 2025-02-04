from django.contrib import admin
from .models import CustomUser, Lesson, Submission
from django.contrib.auth.admin import UserAdmin

# Register your models here.
admin.site.register(CustomUser, UserAdmin)
admin.site.register(Lesson)
admin.site.register(Submission)