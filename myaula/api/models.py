from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class Turma(models.Model):
    nome = models.CharField(max_length=200)
    senha = models.CharField(max_length=12)
    turma = models.CharField(max_length=5)
    professor = models.CharField(max_length=100)
    def __str__(self):
        return self.nome


class Questionario(models.Model):
    nome = models.CharField(max_length=70)
    data = models.DateField()
    turma = models.ForeignKey(Turma, related_name="questionarios" ,on_delete=models.CASCADE)
    def __str__(self):
        return "Questionario" + self.nome + str(self.data) + " " + str(self.turma)
    

class Questao(models.Model):
    enunciado = models.TextField(max_length=3000)
    opcaoA  = models.TextField(max_length=3000)
    opcaoB  = models.TextField(max_length=3000)
    opcaoC  = models.TextField(max_length=3000)
    opcaoD  = models.TextField(max_length=3000)
    gabarito = models.IntegerField(
        default=1,
        validators=[MaxValueValidator(4), MinValueValidator(1)]

    )
    questionario = models.ForeignKey(Questionario, related_name="questoes", on_delete=models.CASCADE)
    def __str__(self):
        return self.enunciado




class Usuario(models.Model):
    nome =  models.CharField(max_length=200)
    matricula =  models.CharField(max_length=12)
    email = models.CharField(max_length=100)
    senha = models.CharField(max_length=12)
    tipo = models.CharField(max_length=12)
    turmas = models.ManyToManyField(Turma, blank=True, default = [])

    def __str__(self):
        return self.nome