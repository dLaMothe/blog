# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import get_object_or_404
from django.views.decorators.cache import never_cache
from django.views.generic import TemplateView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from posts.models import Post, Category, Comment
from posts.serializers import PostSerializer, CategorySerializer, CommentSerializer
# Create your views here.


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Post.objects.order_by("-date_created")
    serializer_class = PostSerializer


class CategoryViewSet(viewsets.ViewSet):
    """
    API endpoint that allows categories to be viewed or edited.
    """

    def list(self, request):
        queryset = Category.objects.all()
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Post.objects.filter(
            categories=pk
        ).order_by("-date_created")
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)


class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows comments to be viewed or edited.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


index = never_cache(TemplateView.as_view(template_name='index.html'))