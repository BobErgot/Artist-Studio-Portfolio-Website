"""
URL configuration for the core application.

This module defines the URL patterns for the core app, including routes
for the index and about pages.

Attributes:
    urlpatterns (list): A list of URL patterns for the core app.
    app_name (str): The name of the app for namespacing URLs.
"""

from django.urls import path
from core.views import IndexView, AboutView

urlpatterns = [
    path("", IndexView.as_view(), name="index"),
    path("about/", AboutView.as_view(), name="about"),
]
"""
A list of URL patterns for the core application, mapping URL paths to views.

Patterns:
    - "": Maps to IndexView, displays the home page.
    - "about/": Maps to AboutView, displays the about page.
"""

app_name = "core"
"""
The name of the app, used for namespacing URLs.
"""
