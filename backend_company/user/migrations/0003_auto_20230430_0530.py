# Generated by Django 3.1.3 on 2023-04-30 05:30

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_company_locations'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='locations',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=300), blank=True, null=True, size=None),
        ),
    ]
