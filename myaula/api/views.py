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
        serializer = AlunoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(senha=request.data["senha"])
            return Response(serializer.data, status=status.HTTP_201_CREATED)        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
            serializer.save(senha=request.data["senha"])
            return Response(serializer.data, status=status.HTTP_201_CREATED)        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TurmaListFilter(APIView):
    def get(self, request, nome):
        turmas = Turma.objects.filter(nome=nome)
        serializer = TurmaSerializer(turmas, many=True)
        return Response(serializer.data)

class AdicionarTurma(APIView):
    def get(self, request):
        pass
    def post(self, request):                     
        turma = Turma.objects.get(id=request.data["turma"])
        aluno = Aluno.objects.get(matricula=request.data["matricula"]) 
        print(turma, aluno, "TURMA:" + turma.senha, "ENVIADO: " + request.data["senha"])       
        if(turma.senha == request.data["senha"]):
            aluno.turmas.add(turma)
            return Response(request.data, status=status.HTTP_200_OK)
        return Response({}, status=status.HTTP_400_BAD_REQUEST)
        