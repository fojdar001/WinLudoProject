# Generated by Django 5.1.1 on 2025-04-05 08:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='username',
            field=models.CharField(default='temp_user', max_length=255, unique=True),
            preserve_default=False,
        ),
    ]
