from django.apps import AppConfig


class BlogConfig(AppConfig):
    """
    Configuration for the Blog app.

    This class defines the name of the Blog app, which is used by Django
    to configure the app properly. The 'name' attribute is set to 'blog',
    which corresponds to the directory name of the app.
    """
    name = 'blog'
