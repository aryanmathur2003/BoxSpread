from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import OptionChain
from django.db import IntegrityError
from django.http import JsonResponse
from django.conf import settings

# Create your views here.
class runScript(APIView):
    def post(self, request):
        OptionChain.save()