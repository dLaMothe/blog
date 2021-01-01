# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from posts.models import Post, Category

from pagedown.widgets import AdminPagedownWidget


class PostAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': AdminPagedownWidget}
    }


class CategoryAdmin(admin.ModelAdmin):
    pass


admin.site.register(Post, PostAdmin)
admin.site.register(Category, CategoryAdmin)
