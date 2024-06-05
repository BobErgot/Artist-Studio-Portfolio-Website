from ckeditor.fields import RichTextField
from django.db import models
from django.core.files.storage import FileSystemStorage
from core.validators import validate_date

local_storage = FileSystemStorage()


class ViewMoreSection(models.Model):
    """
    Model representing a section that includes a "view more" button.

    Attributes:
        name (CharField): The name of the section.
        description (TextField): A brief description of the section.
        button (CharField): The text for the button.
        image (ImageField): An image for the section.
    """
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=150)
    button = models.CharField(max_length=20)
    image = models.ImageField(storage=local_storage)

    def __str__(self):
        return self.name


class SocialMedia(models.Model):
    """
    Model representing a social media link.

    Attributes:
        name (CharField): The name of the social media platform.
        url (TextField): The URL of the social media profile.
    """
    name = models.CharField(max_length=255)
    url = models.TextField(max_length=150, blank=True)

    def __str__(self):
        return self.name


class LatestReleasesSection(models.Model):
    """
    Model representing a section for latest music releases.

    Attributes:
        album (CharField): The name of the album.
        artist (TextField): The name of the artist.
        trackId (CharField): The track ID.
    """
    album = models.CharField(max_length=255)
    artist = models.TextField(max_length=150)
    trackId = models.CharField(max_length=255)

    def __str__(self):
        return self.album


class Message(models.Model):
    """
    Model representing a contact message.

    Attributes:
        email (EmailField): The email of the sender.
        name (CharField): The name of the sender.
        query (CharField): The content of the message.
        receive_newsletter (BooleanField): Whether the sender wants to receive newsletters.
    """
    email = models.EmailField(blank=False, null=False, max_length=200)
    name = models.CharField(max_length=255, blank=True)
    query = models.CharField(max_length=1000)
    receive_newsletter = models.BooleanField(blank=True)

    def __str__(self):
        return self.email


class Event(models.Model):
    """
    Model representing an event.

    Attributes:
        date (DateField): The date of the event.
        concert_name (CharField): The name of the concert.
        location (CharField): The location of the event.
        tickets (CharField): Information about the tickets.
        booking_url (CharField): URL for booking tickets.
    """
    date = models.DateField(validators=[validate_date])
    concert_name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    tickets = models.CharField(max_length=255, blank=True)
    booking_url = models.CharField(max_length=1000, blank=True)

    def __str__(self):
        return self.concert_name


class AboutPage(models.Model):
    """
    Model representing the about page.

    Attributes:
        name (CharField): The name of the about page section.
        title (CharField): The title of the about page.
        image (ImageField): An image for the about page section.
        quote (CharField): A quote for the about page section.
        body (RichTextField): The body content of the about page.
    """
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    image = models.ImageField(storage=local_storage)
    quote = models.CharField(max_length=255, blank=True)
    body = RichTextField(config_name="default")

    def __str__(self):
        return self.name
