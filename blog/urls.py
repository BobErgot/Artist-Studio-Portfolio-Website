"""
URL configuration for the blog application.

This module defines the URL patterns for the blog app, including routes
for serving static files and viewing individual blog posts.

Attributes:
    urlpatterns (list): A list of URL patterns for the blog app.
    app_name (str): The name of the app for namespacing URLs.
"""

from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path
from blog.views import PostView

urlpatterns = [
    path("<int:pk>/<slug:slug>", PostView.as_view(), name='post_detail'),
]
"""
A list of URL patterns for the blog application, mapping URL paths to views.

Patterns:
    - "<int:pk>/<slug:slug>": Maps to PostView, displays a blog post based on primary key and slug.
"""

urlpatterns += staticfiles_urlpatterns()
app_name = "blog"
"""
The name of the app, used for namespacing URLs.
"""
