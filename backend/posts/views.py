# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from rest_framework.response import Response
from posts.models import Post, Category, Comment
from posts.serializers import PostSerializer, PostListSerializer, CategorySerializer, CommentSerializer
# Create your views here.


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def list(self, request):
        queryset = Post.objects.all()
        serializer_class = PostListSerializer(queryset, many=True)
        return Response(serializer_class.data)


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
