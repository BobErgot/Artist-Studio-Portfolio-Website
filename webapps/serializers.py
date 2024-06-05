from rest_framework import serializers
from webapps.models import Reservation, BookingSettings


class ReservationSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the Reservation model.

    This serializer includes fields for date, start time, and end time.
    """
    class Meta:
        model = Reservation
        fields = ('date', 'start_time', 'end_time')


class BookingSettingsSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the BookingSettings model.

    This serializer includes fields for the date.
    """
    class Meta:
        model = BookingSettings
        fields = ('date',)
