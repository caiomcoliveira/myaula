from django.db import models

# Create your models here.


class Turma(models.Model):
    nome = models.CharField(max_length=200)
    senha = models.CharField(max_length=12)
    def __str__(self):
        return self.nome

class Aluno(models.Model):
    nome =  models.CharField(max_length=200)
    matricula =  models.CharField(max_length=12)
    senha = models.CharField(max_length=12)
    turmas = models.ManyToManyField(Turma)

    def __str__(self):
        return self.nome