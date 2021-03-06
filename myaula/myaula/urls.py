"""myaula URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/adicionar/', views.AdicionarTurma.as_view()),
    path('api/login/', views.Login.as_view()),
    path('api/cadastrar/', views.UsuarioCadastro.as_view()),
    path('api/usuario/<slug:matricula>/', views.UsuarioByMatricula.as_view()),
    path('api/turmas/', views.TurmaList.as_view()),
    path('api/questionario/', views.QuestionarioList.as_view()),

    path('api/turmas/nome=<slug:nome>/', views.TurmaListFilter.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)