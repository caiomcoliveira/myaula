from rest_framework import serializers
from .models import  Turma, Usuario, Questao, Questionario




class QuestaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questao
        fields = ('id', 'enunciado', 'opcaoA', 'opcaoB', 'opcaoC', 'opcaoD', 'gabarito')

class QuestionarioSerializer(serializers.ModelSerializer):
    questoes = QuestaoSerializer(many=True)
    class Meta:
        model = Questionario
        fields = '__all__'
    def create(self, validated_data):
        questoes = validated_data.pop('questoes')
        instance = Questionario.objects.create(**validated_data)
        for questao in questoes:
            instanciaQuestao = Questao.objects.create(questionario=instance, **questao)
            instance.questoes.add(instanciaQuestao)
        
        instance.save()
        return instance 

class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=200)
    senha = serializers.CharField(max_length=20)
    
class TurmaSerializer(serializers.ModelSerializer):
    questionarios = QuestionarioSerializer(many=True, read_only=True)
    class Meta:
        model = Turma
        # fields = ('id', 'nome', 'turma', 'professor', 'questionarios')
        fields = '__all__'

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


