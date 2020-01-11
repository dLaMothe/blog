# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.views.decorators.cache import never_cache
from django.views.generic import TemplateView
from rest_framework import viewsets
from posts.models import Post, Category, Comment
from posts.serializers import PostSerializer, CategorySerializer, CommentSerializer
# Create your views here.


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Post.objects.order_by("-date_created")
    serializer_class = PostSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows categorys to be viewed or edited.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows comments to be viewed or edited.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


index = never_cache(TemplateView.as_view(template_name='index.html'))