from datetime import datetime
from django.urls import path, register_converter

from webapps.views import (
    WebAppView, ReservationViewSet, WebAppBookingView, BookingCloseViewSet,
    BookingGateway, RazorpayGateway, SuccessRedirect
)


class DateConverter:
    """
    A custom URL converter for dates in the format YYYY-MM-DD.

    This converter allows dates to be used in URL patterns and automatically
    converts them to Python datetime objects.
    """
    regex = '\\d{4}-\\d{2}-\\d{2}'

    @staticmethod
    def to_python(value):
        """
        Convert a matched string from the URL to a datetime object.

        Args:
            value (str): The date string from the URL.

        Returns:
            datetime: The corresponding datetime object.
        """
        return datetime.strptime(value, '%Y-%m-%d')

    @staticmethod
    def to_url(value):
        """
        Convert a datetime object to a URL-safe string.

        Args:
            value (datetime): The datetime object.

        Returns:
            str: The corresponding date string.
        """
        return value


register_converter(DateConverter, 'dateFormat')

urlpatterns = [
    path("", WebAppView.as_view(), name='webapps-index'),
    path("bookings/<signedUrl>", WebAppBookingView.as_view(), name='webapps-form'),
    path("bookings/close/", BookingCloseViewSet.as_view({'get': 'booking_close'}), name='booking-close'),
    path("bookings/<dateFormat:date>/", ReservationViewSet.as_view({'get': 'booking_appointments'}), name='booking-appointments'),
    path("bookings/gateway/", BookingGateway.as_view(), name='booking-gateway'),
    path("bookings/razorpay/<signedUrl>", RazorpayGateway.as_view(), name='razorpay-gateway'),
    path("bookings/success/", SuccessRedirect.as_view(), name='webapps-redirect'),
]

app_name = "webapps"
