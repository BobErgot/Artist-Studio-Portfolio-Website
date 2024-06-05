"""artist URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/

This configuration includes paths for the admin site, core app, blog app, webapps, and sitemap.
"""

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.urls import path, include

from .sitemaps import PostSitemap, StaticSitemap

sitemaps = {'static': StaticSitemap, 'blog': PostSitemap}

urlpatterns = [
    path('admin/', admin.site.urls), path('', include('core.urls', 'core'), name='core'),
    path('blog/', include('blog.urls', 'blog'), name='blog'),
    path('studio/', include('webapps.urls', 'webapps'), name='webapps'),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
