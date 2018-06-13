from django.db import models

# Create your models here.

class Turma(models.Model):
    nome = models.CharField(max_length=200)
    senha = models.CharField(max_length=12)
    turma = models.CharField(max_length=5)
    professor = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nome

class Usuario(models.Model):
    nome =  models.CharField(max_length=200)
    matricula =  models.CharField(max_length=12)
    email = models.CharField(max_length=100)
    senha = models.CharField(max_length=12)
    tipo = models.CharField(max_length=12)
    turmas = models.ManyToManyField(Turma, blank=True, default = [])

    def __str__(self):
        return self.nome