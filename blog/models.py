from autoslug import AutoSlugField
from ckeditor.fields import RichTextField
from django.core.files.storage import FileSystemStorage
from django.db import models

local_storage = FileSystemStorage()


def remove_articles_and_prepositions(title):
    """
    Removes common articles and prepositions from the title.

    Args:
        title (str): The original title of the post.

    Returns:
        str: The title with articles and prepositions removed.
    """
    words_to_remove = {'a', 'an', 'the', 'in', 'on', 'at', 'of', 'for', 'to', 'with', 'by', 'about', 'as', 'into',
                       'like', 'through', 'after', 'over', 'between', 'out', 'against', 'during', 'without', 'before',
                       'under', 'around', 'among'}
    title_words = title.split()
    filtered_words = [word for word in title_words if word.lower() not in words_to_remove]
    return ' '.join(filtered_words)


class Post(models.Model):
    """
    Model representing a blog post.

    Attributes:
        title (CharField): The title of the post.
        url_slug (AutoSlugField): A URL-friendly slug generated from the title.
        image (ImageField): An image associated with the post.
        description (CharField): A short description of the post.
        body (RichTextField): The main content of the post.
        created_on (DateTimeField): The date and time when the post was created.
        last_modified (DateTimeField): The date and time when the post was last modified.
    """

    title = models.CharField(max_length=200, unique=True)
    url_slug = AutoSlugField(populate_from='get_preprocessed_title', unique=True, max_length=75)
    image = models.ImageField(storage=local_storage)
    # image = models.ImageField(storage=ftp_storage)
    description = models.CharField(max_length=255, blank=True)
    body = RichTextField(config_name="default")
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def get_preprocessed_title(self):
        """
        Returns the title with common articles and prepositions removed.
        """
        return remove_articles_and_prepositions(self.title)

    def __str__(self):
        """
        Returns the string representation of the Post object, which is its title.
        """
        return self.title
