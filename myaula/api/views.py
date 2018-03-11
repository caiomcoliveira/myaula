from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Aluno, Turma
from .serializers import AlunoSerializer, TurmaSerializer
# Create your views here.


class AlunoList(APIView):
    def get(self, request):
        alunos = Aluno.objects.all()
        serializer = AlunoSerializer(alunos, many=True)
        return Response(serializer.data)
    def post(self, request):
        pass

class AlunoByMatricula(APIView):
    def get(self, request, matricula):
        aluno = Aluno.objects.get(matricula=matricula)
        serializer = AlunoSerializer(aluno,many=False)
        return Response(serializer.data)

class TurmaList(APIView):
    def get(self, request):
        turmas = Turma.objects.all()
        serializer = TurmaSerializer(turmas, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = TurmaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)