"""
WSGI config for artist project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/
"""

import os
import environ
from django.core.wsgi import get_wsgi_application

# Initialize environment variables
env = environ.Env()

# Load environment variables from a .env file
environ.Env.read_env(os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env'))

# Set the default settings module for the 'artist' project
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'artist.settings')

# Get the WSGI application for the 'artist' project
application = get_wsgi_application()

# Fallback for SECRET_KEY if not found in the environment
SECRET_KEY = env('SECRET_KEY', default='<Add fallback secret key>')  # TODO
