# Generated by Django 2.0.6 on 2018-06-13 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20180613_1229'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='turmas',
            field=models.ManyToManyField(blank=True, to='api.Turma'),
        ),
    ]
