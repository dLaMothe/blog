# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from blog.posts.models import Post, Category, Comment
from blog.posts.serializers import PostSerializer, CategorySerializer, CommentSerializer
# Create your views here.


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Post.objects.all()
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
