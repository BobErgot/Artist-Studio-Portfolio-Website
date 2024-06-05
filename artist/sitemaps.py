from django.contrib.sitemaps import Sitemap
from django.urls import reverse

from blog.models import Post


class StaticSitemap(Sitemap):
    """
    Sitemap for static pages of the site.

    Attributes:
        changefreq (str): How frequently the content at a particular URL is likely to change. Defaults to "monthly".
        priority (float): The priority of this URL relative to other URLs on your site. Defaults to 1.0.
        protocol (str): The protocol to use (http or https). Defaults to 'https'.
    """

    changefreq = "monthly"
    priority = 1.0
    protocol = 'https'

    def items(self):
        """
        Returns a list of URL names for the static views to include in the sitemap.

        Returns:
            list: A list of URL names.
        """
        return ['core:index', 'core:about', 'webapps:webapps-index']

    def location(self, item):
        """
        Returns the absolute URL for a given item.

        Args:
            item (str): The URL name.

        Returns:
            str: The absolute URL for the given URL name.
        """
        return reverse(item)


class PostSitemap(Sitemap):
    """
    Sitemap for blog posts.

    Attributes:
        changefreq (str): How frequently the content at a particular URL is likely to change. Defaults to "weekly".
        priority (float): The priority of this URL relative to other URLs on your site. Defaults to 0.9.
        protocol (str): The protocol to use (http or https). Defaults to 'https'.
    """

    changefreq = "weekly"
    priority = 0.9
    protocol = 'https'

    def items(self):
        """
        Returns a queryset of all blog posts to include in the sitemap.

        Returns:
            QuerySet: A queryset of all blog posts.
        """
        return Post.objects.all()

    def lastmod(self, obj):
        """
        Returns the last modified date of a given blog post.

        Args:
            obj (Post): The blog post object.

        Returns:
            datetime: The last modified date of the blog post.
        """
        return obj.last_modified

    def location(self, obj):
        """
        Returns the absolute URL for a given blog post.

        Args:
            obj (Post): The blog post object.

        Returns:
            str: The absolute URL for the blog post.
        """
        return '/blog/%s/%s' % (obj.pk, obj.url_slug)
