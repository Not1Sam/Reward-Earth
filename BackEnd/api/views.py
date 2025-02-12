from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class PointsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({"points": user.Points})

    def post(self, request, action):
        user = request.user
        if action == "increase":
            user.Points += 1
        elif action == "decrease":
            user.Points -= 1
        user.save()
        return Response({"Points": user.Points})

class IncreasePointsView(PointsView):
    def post(self, request):
        return super().post(request, "increase")

class DecreasePointsView(PointsView):
    def post(self, request):
        return super().post(request, "decrease")
