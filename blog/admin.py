from django.contrib import admin
from blog.models import Post


class PostAdmin(admin.ModelAdmin):
    """
    Custom admin model for the Post model.

    This admin configuration makes the 'url_slug' field read-only,
    preventing it from being edited in the admin interface.
    """
    readonly_fields = ('url_slug',)


admin.site.register(Post, PostAdmin)
