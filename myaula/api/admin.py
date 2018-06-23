from django.contrib import admin
from .models import Turma, Usuario, Questao, Questionario
# Register your models here.

admin.site.register(Turma)
admin.site.register(Usuario)
admin.site.register(Questionario)
admin.site.register(Questao)