from ckeditor.fields import RichTextField
from django.core.exceptions import ValidationError
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.utils import timezone
from django.core.files.storage import FileSystemStorage

local_storage = FileSystemStorage()


class StudioSection(models.Model):
    """
    Model representing a studio section.

    Attributes:
        name (CharField): The name of the studio section.
        title (CharField): The title of the studio section.
        description (TextField): A brief description of the studio section.
        summary (RichTextField): A detailed summary of the studio section.
        images (ManyToManyField): A collection of images related to the studio section.
    """
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=255)
    summary = RichTextField(config_name="default")
    images = models.ManyToManyField('StudioImage', related_name='studios')

    def __str__(self):
        return self.name


class EquipmentSection(models.Model):
    """
    Model representing an equipment section.

    Attributes:
        name (CharField): The name of the equipment section.
        title (CharField): The title of the equipment section.
        description (TextField): A brief description of the equipment section.
        images (ManyToManyField): A collection of images related to the equipment section.
    """
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=255)
    images = models.ManyToManyField('StudioImage', related_name='equipments')

    def __str__(self):
        return self.name


class SpecSection(models.Model):
    """
    Model representing a specification section.

    Attributes:
        title (CharField): The title of the specification section.
        description (RichTextField): A detailed description of the specification section.
    """
    title = models.CharField(max_length=255)
    description = RichTextField(config_name="default")

    def __str__(self):
        return self.title


class StudioImage(models.Model):
    """
    Model representing a studio image.

    Attributes:
        name (CharField): The name of the image.
        image (ImageField): The image file.
    """
    name = models.CharField(max_length=255)
    image = models.ImageField(storage=local_storage)

    def __str__(self):
        return self.name


class Homepage(models.Model):
    """
    Model representing the homepage.

    Attributes:
        name (CharField): The name of the homepage section.
        image (ImageField): The image file for the homepage.
        description (TextField): A brief description of the homepage.
        button (CharField): The text for the button on the homepage.
    """
    name = models.CharField(max_length=255)
    image = models.ImageField(storage=local_storage)
    description = models.TextField(max_length=255)
    button = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Testimonials(models.Model):
    """
    Model representing a testimonial.

    Attributes:
        name (CharField): The name of the person giving the testimonial.
        reviews (TextField): The review text.
    """
    name = models.CharField(max_length=255)
    reviews = models.TextField(max_length=255)

    def __str__(self):
        return self.name


class BookingSettings(models.Model):
    """
    Model representing booking settings.

    Attributes:
        name (CharField): The name of the booking settings section.
        amount (IntegerField): The amount for the booking.
        date (DateField): The date for the booking.
    """
    name = models.CharField(max_length=255)
    amount = models.IntegerField()
    date = models.DateField()

    def __str__(self):
        return self.name


class Reservation(models.Model):
    """
    Model representing a reservation.

    Attributes:
        STATUS (tuple): Choices for the status of the reservation.
        created_at (DateTimeField): The date and time when the reservation was created.
        updated_at (DateTimeField): The date and time when the reservation was last updated.
        email_id (EmailField): The email ID of the person making the reservation.
        number (PositiveBigIntegerField): The phone number of the person making the reservation.
        date (DateField): The date of the reservation.
        start_time (TimeField): The start time of the reservation.
        end_time (TimeField): The end time of the reservation.
        status (IntegerField): The status of the reservation.
        amount (PositiveIntegerField): The amount for the reservation.
        order_id (CharField): The order ID for the reservation.
        payment_id (CharField): The payment ID for the reservation.
    """
    STATUS = (
        (1, 'BLOCKED'),
        (2, 'BOOKED')
    )

    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)
    email_id = models.EmailField(blank=False, null=False, max_length=200)
    number = models.PositiveBigIntegerField(blank=False,
                                            null=False,
                                            validators=[MinValueValidator(1000000000), MaxValueValidator(9999999999)])
    date = models.DateField(null=False, blank=False)
    start_time = models.TimeField(null=False, blank=False)
    end_time = models.TimeField(null=False, blank=False)
    status = models.IntegerField(choices=STATUS, default=1)
    amount = models.PositiveIntegerField(blank=False, null=False)
    order_id = models.CharField(blank=False, null=False, max_length=200)
    payment_id = models.CharField(blank=True, null=True, max_length=200)

    def clean(self):
        """
        Custom validation for the Reservation model.

        Raises:
            ValidationError: If the end time is before the start time or if the date is in the past.
        """
        if self.start_time > self.end_time:
            raise ValidationError('End time should be after start time')
        if self.date < timezone.now().date():
            raise ValidationError('Past date cannot be selected')
        return super().clean()

    class Meta:
        unique_together = ('date', 'start_time')

    def __str__(self):
        return self.email_id


class Token(models.Model):
    """
    Model representing an API token.

    Attributes:
        key (CharField): The key for the token.
        limit (IntegerField): The limit for the token usage.
    """
    key = models.CharField(max_length=400, primary_key=True)
    limit = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(3)])

    def __str__(self):
        return self.key
