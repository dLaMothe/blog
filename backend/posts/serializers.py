from rest_framework import serializers

from posts.models import Comment, Post, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class PostSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True)

    class Meta:
        model = Post
        fields = ['id', 'author', 'title', 'subtitle', 'body', 'categories',
                  'date_created', 'date_modified']

    def create(self, data):
        categories_data = data.pop('categories')
        post = Post.objects.create(**data)
        for category in categories_data:
            category, created = Category.objects.get_or_create(
                name=category['name'])
            post.categories.add(category)
        return post


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'author', 'body', 'created_on', 'post']
