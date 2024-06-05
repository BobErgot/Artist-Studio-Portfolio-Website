import datetime

from django import forms
from django.core.exceptions import ValidationError
from django.core.validators import MaxValueValidator, MinValueValidator

from webapps.models import Reservation


class PaymentForm(forms.ModelForm):
    """
    A form for handling payment information for a reservation.

    This form includes fields for email, phone number, date, start time, and end time.
    """
    email_id = forms.EmailField(
        max_length=200,
        widget=forms.TextInput(attrs={'placeholder': 'example@example.com', 'type': 'email'}),
        label=''
    )
    number = forms.IntegerField(
        validators=[MinValueValidator(1000000000), MaxValueValidator(9999999999)],
        widget=forms.TextInput(attrs={
            'placeholder': '+1', 'type': 'number', 'min': '1000000000', 'max': '9999999999'
        }),
        label=''
    )
    date = forms.DateField(
        widget=forms.TextInput(attrs={'type': 'date', 'readonly': 'readonly'}),
        label=''
    )
    start_time = forms.TimeField(
        widget=forms.TextInput(attrs={'type': 'time', 'readonly': 'readonly'}),
        label=''
    )
    end_time = forms.TimeField(
        widget=forms.TextInput(attrs={'type': 'time', 'readonly': 'readonly'}),
        label=''
    )

    def clean_date(self):
        """
        Validate that the date is not in the past.

        Returns:
            date: The cleaned date data.

        Raises:
            ValidationError: If the date is in the past.
        """
        data = self.cleaned_data['date']
        if data < datetime.date.today():
            raise ValidationError('Invalid date - Booking in past')
        return data

    def clean_start_time(self):
        """
        Validate that the start time is within the allowed time slot.

        Returns:
            time: The cleaned start time data.

        Raises:
            ValidationError: If the time is outside the allowed slot.
        """
        data = self.cleaned_data['start_time']
        if data < datetime.time(10, 0) or data > datetime.time(20, 0):
            raise ValidationError('Invalid time slot')
        return data

    def clean_end_time(self):
        """
        Validate that the end time is within the allowed time slot.

        Returns:
            time: The cleaned end time data.

        Raises:
            ValidationError: If the time is outside the allowed slot.
        """
        data = self.cleaned_data['end_time']
        if data < datetime.time(10, 0) or data > datetime.time(20, 0):
            raise ValidationError('Invalid time slot')
        return data

    def __init__(self, *args, **kwargs):
        """
        Initialize the PaymentForm with default values and custom attributes.
        """
        super(PaymentForm, self).__init__(*args, **kwargs)

    class Meta:
        """
        Meta class for PaymentForm to specify the model and fields.
        """
        model = Reservation
        fields = ('email_id', 'number', 'date', 'start_time', 'end_time')


class SlotForm(forms.Form):
    """
    A form for selecting a time slot.

    This form includes fields for date, start time, and end time.
    """
    date = forms.DateField()
    start_time = forms.TimeField()
    end_time = forms.TimeField()

    def clean_date(self):
        """
        Validate that the date is not in the past.

        Returns:
            date: The cleaned date data.

        Raises:
            ValidationError: If the date is in the past.
        """
        data = self.cleaned_data['date']
        if data < datetime.date.today():
            raise ValidationError('Invalid date - Date in past')
        return data

    def clean_start_time(self):
        """
        Validate that the start time is within the allowed time slot.

        Returns:
            time: The cleaned start time data.

        Raises:
            ValidationError: If the time is outside the allowed slot.
        """
        data = self.cleaned_data['start_time']
        if data < datetime.time(10, 0) or data > datetime.time(20, 0):
            raise ValidationError('Invalid time slot')
        return data

    def clean_end_time(self):
        """
        Validate that the end time is within the allowed time slot.

        Returns:
            time: The cleaned end time data.

        Raises:
            ValidationError: If the time is outside the allowed slot.
        """
        data = self.cleaned_data['end_time']
        if data < datetime.time(10, 0) or data > datetime.time(20, 0):
            raise ValidationError('Invalid time slot')
        return data

    def __init__(self, *args, **kwargs):
        """
        Initialize the SlotForm with default values and custom attributes.
        """
        super(SlotForm, self).__init__(*args, **kwargs)
