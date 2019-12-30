# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Category(models.Model):

    def __str__(self):
        return self.name

    name = models.CharField(max_length=20)


class Post(models.Model):

    def __str__(self):
        return self.title

    author = models.CharField(max_length=60, default='')
    title = models.CharField(max_length=100, default='')
    abstract = models.TextField(default='')
    color = models.TextField(default='')
    body = models.TextField(default='')
    categories = models.ManyToManyField("Category", related_name="posts")
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)


class Comment(models.Model):
    author = models.CharField(max_length=60)
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey('Post', on_delete=models.CASCADE)
