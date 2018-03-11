# Generated by Django 2.0.3 on 2018-03-10 23:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20180310_2037'),
    ]

    operations = [
        migrations.CreateModel(
            name='Turma',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=200)),
                ('senha', models.CharField(max_length=12)),
            ],
        ),
        migrations.AddField(
            model_name='aluno',
            name='turmas',
            field=models.ManyToManyField(to='api.Turma'),
        ),
    ]