# Generated by Django 2.0.6 on 2018-06-13 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_aluno_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='turma',
            name='professor',
            field=models.CharField(default='A', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='turma',
            name='turma',
            field=models.CharField(default='A', max_length=5),
            preserve_default=False,
        ),
    ]
