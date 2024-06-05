from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_date(date):
    """
    Validate that the given date is not in the past.

    This function checks if the provided date is before the current date.
    If it is, a ValidationError is raised.

    Args:
        date (datetime.date): The date to be validated.

    Raises:
        ValidationError: If the date is in the past.
    """
    if date < timezone.now().date():
        raise ValidationError("Date cannot be in the past")
