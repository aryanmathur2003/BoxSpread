from django.urls import path
from data import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index),
    path('runScript/<str:exp_date>/', views.runScript.as_view()),
]