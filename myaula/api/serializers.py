from rest_framework import serializers
from .models import Aluno, Turma


class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = ('id', 'nome')
        #fields = '__all__'

class AlunoSerializer(serializers.ModelSerializer):
    turmas = TurmaSerializer(many=True)
    class Meta:
        model = Aluno        
        fields = ('nome', 'matricula', 'email', 'turmas')
