from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class OptionChain(models.Model):
    calls = ArrayField(models.IntegerField(null=True, default = -1))
    puts = ArrayField(models.IntegerField(null=True, default = -1))
    final = ArrayField(models.IntegerField(null=True, default = -1))
