from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Usuario, Turma
from .serializers import TurmaSerializer, UsuarioSerializer, LoginSerializer
# Create your views here.



class Login(APIView):
    def get(self, request):
        pass
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        
        if serializer.is_valid():   
            usuario = Usuario.objects.get(email=request.data["email"])
            if(usuario.senha == request.data["senha"]):
                usuarioSerializer = UsuarioSerializer(usuario)
                return Response(usuarioSerializer.data, status=status.HTTP_200_OK)        
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class UsuarioCadastro(APIView):
    def get(self, request):
        pass
    def post(self, request):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(senha=request.data["senha"])
            return Response(serializer.data, status=status.HTTP_201_CREATED)        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class UsuarioByMatricula(APIView):
    def get(self, request, matricula):
        usuario = Usuario.objects.get(matricula=matricula)
        serializer = UsuarioSerializer(usuario,many=False)
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
        usuario = Usuario.objects.get(matricula=request.data["matricula"]) 
        if(turma.senha == request.data["senha"]):
            usuario.turmas.add(turma)
            return Response(request.data, status=status.HTTP_200_OK)
        return Response({}, status=status.HTTP_400_BAD_REQUEST)
        