from rest_framework import serializers
from .models import  Turma, Usuario


class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = ('id', 'nome', 'turma', 'professor')
        #fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    turmas = TurmaSerializer(many=True)
    class Meta:
        model = Usuario        
        fields = ('nome', 'matricula', 'email', 'tipo', 'turmas')
    def create(self, validated_data):
        turmas = validated_data.pop('turmas')
        instance = Usuario.objects.create(**validated_data)
        for turma in turmas:
            instance.turmas.add(turma)
        
        instance.save()
        return instance 

    
class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=200)
    senha = serializers.CharField(max_length=20)

