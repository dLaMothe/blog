# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from blog.posts.models import Post, Category


class PostAdmin(admin.ModelAdmin):
    pass


class CategoryAdmin(admin.ModelAdmin):
    pass


admin.site.register(Post, PostAdmin)
admin.site.register(Category, CategoryAdmin)
