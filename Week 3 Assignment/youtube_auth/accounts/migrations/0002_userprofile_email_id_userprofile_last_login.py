# Generated by Django 5.2.3 on 2025-07-02 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='email_ID',
            field=models.TextField(blank=True, max_length=180, null=True),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='last_login',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
