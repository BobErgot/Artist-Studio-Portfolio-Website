import json
import secrets
from datetime import datetime, timedelta

import razorpay
import requests
from django.core import signing
from django.http import HttpResponseNotFound
from django.shortcuts import render, redirect
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.views.generic import TemplateView
from meta.views import Meta
from rest_framework import viewsets, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from rest_framework.views import APIView

from artist import settings
from webapps.forms import PaymentForm, SlotForm
from webapps.models import StudioSection, EquipmentSection, SpecSection, Testimonials, Reservation, BookingSettings, \
    Token
from webapps.serializers import BookingSettingsSerializer


def verify_free_slot(date, start_time, end_time, options):
    """
    Verify if the given time slot is available for booking.

    Args:
        date (datetime.date): The date of the booking.
        start_time (datetime.time): The start time of the booking.
        end_time (datetime.time): The end time of the booking.
        options (list): The available time slots.

    Returns:
        bool: True if the slot is available, False otherwise.
    """
    date_queryset = BookingSettings.objects.get(name="Edit Booking Details")
    if date > date_queryset.date:
        return False

    start_slot_index = 0
    end_slot_index = 0
    temp_date = datetime(1, 1, 1)
    time_delta = datetime.combine(temp_date, end_time) - datetime.combine(temp_date, start_time)
    hour_diff = time_delta.seconds // 3600
    if hour_diff > 5:
        return False

    end_time_lookup = (datetime.combine(temp_date, end_time) - timedelta(hours=1)).time()

    reservation_object = Reservation.objects.all()
    if date:
        queryset = reservation_object.filter(date=date)
        temp_options = options.copy()
        if queryset.exists():
            for query in queryset:
                time_delta = datetime.combine(query.date, query.end_time) - datetime.combine(query.date,
                                                                                             query.start_time)
                start_index = -1
                for item in temp_options:
                    time_check = f"{item['text']}:00"
                    if datetime.strptime(time_check, '%H:%M:%S').time() == query.start_time:
                        start_index = temp_options.index(item)
                        break
                for _ in range(time_delta.seconds // 3600):
                    if start_index != -1:
                        temp_options.pop(start_index)

            start_slot_index = next((i for i, item in enumerate(temp_options) if
                                     datetime.strptime(f"{item['text']}:00", '%H:%M:%S').time() == start_time), -1)
            end_slot_index = next((i for i, item in enumerate(temp_options) if
                                   datetime.strptime(f"{item['text']}:00", '%H:%M:%S').time() == end_time_lookup), -1)

            if end_slot_index - start_slot_index == hour_diff - 1:
                return True
            else:
                return False
        else:
            return True
    else:
        return False


class WebAppView(TemplateView):
    """
    View for the main page of the web application.

    Attributes:
        template_name (str): The template used for rendering the view.
        knowledge (dict): A dictionary to store context data for the template.
        meta (Meta): Meta information for SEO and social media sharing.
    """
    template_name = 'webapps/webapps_index.html'
    knowledge = {}
    meta = Meta(
        use_title_tag=True, use_og=True, use_twitter=True, use_facebook=True,
        title="NLYTN Studio - Playground For Music & Audio Post-Production",
        description="NLYTN Studio is leading innovative recording facility. Designed as the ultimate playground for "
                    "music and audio post-production",
        keywords=['studio', 'melodies', 'NLYTN', 'trance', 'music', 'songs', 'disco', 'sound mix', 'post production'],
        url='/studio',
        image='https://<ADD HOST>/static/images/background/nlytn-studio-book.jpg', # TODO
        object_type='website',
        site_name='NLYTN Studio',
        twitter_site='@musicbynlytn',
        twitter_creator='@musicbynlytn',
        twitter_type='summary_large_image', )

    def get(self, request, *args, **kwargs):
        """
        Handle GET requests to display the main page.

        Args:
            request (HttpRequest): The HTTP request object.

        Returns:
            HttpResponse: The rendered template with the context data.
        """
        context = {'studio': StudioSection.objects.filter(name="Studio Section").first(),
                   'equipment': EquipmentSection.objects.filter(name="Equipment Section").first(),
                   'specs': SpecSection.objects.all(),
                   'testimonials': Testimonials.objects.all(),
                   'meta': self.meta, }
        self.knowledge.update(context)
        return render(request, self.template_name, self.knowledge)


class ReservationViewSet(viewsets.ModelViewSet):
    """
    ViewSet for handling reservations.

    Attributes:
        authentication_classes (list): The authentication classes for the viewset.
        permission_classes (list): The permission classes for the viewset.
        throttle_classes (list): The throttle classes for the viewset.
        queryset (QuerySet): The queryset of reservations.
        options (list): The available time slots.
        FMT (str): The format for time strings.
    """
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]
    throttle_classes = [AnonRateThrottle]
    queryset = Reservation.objects.all()
    options = [{"value": i, "text": f"{10 + i}:00", "defaultSelected": True, "selected": False} for i in range(10)]
    FMT = '%H:%M:%S'

    @action(detail=False)
    def booking_appointments(self, request, date=None):
        """
        Handle the booking appointments action.

        Args:
            request (HttpRequest): The HTTP request object.
            date (str): The date for which to check appointments.

        Returns:
            Response: The response containing available time slots or a 404 status.
        """
        print("Received request for booking appointments")
        print(f"Date parameter: {date}")
        if date:
            queryset = self.queryset.filter(date=date)
            temp_options = self.options.copy()
            if queryset.exists():
                for query in queryset:
                    time_delta = datetime.combine(query.date, query.end_time) - datetime.combine(query.date, query.start_time)

                    start_time = query.start_time
                    end_time = query.end_time
                    time_slots_to_remove = []

                    for i, item in enumerate(temp_options):
                        time_check = datetime.strptime(f"{item['text']}:00", '%H:%M:%S').time()
                        if start_time <= time_check < end_time:
                            time_slots_to_remove.append(i)

                    for i in reversed(time_slots_to_remove):
                        print(f"Removing slot: {temp_options[i]}")
                        temp_options.pop(i)

                return Response(
                    {"data": {"optgroups": [{"label": 'Check the hours to book', "options": temp_options}]}})
            else:
                return Response(
                    {"data": {"optgroups": [{"label": 'Check the hours to book', "options": self.options}]}})
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


class BookingCloseViewSet(viewsets.ModelViewSet):
    """
    ViewSet for handling booking close operations.

    Attributes:
        authentication_classes (list): The authentication classes for the viewset.
        permission_classes (list): The permission classes for the viewset.
        throttle_classes (list): The throttle classes for the viewset.
        queryset (QuerySet): The queryset of booking settings.
        serializer (BookingSettingsSerializer): The serializer for booking settings.
    """
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]
    throttle_classes = [AnonRateThrottle]
    queryset = BookingSettings.objects.all()
    serializer = BookingSettingsSerializer(queryset, many=True)

    @action(detail=False)
    def booking_close(self, request):
        """
        Handle the booking close action.

        Args:
            request (HttpRequest): The HTTP request object.

        Returns:
            Response: The response containing booking settings or a 404 status.
        """
        queryset = [BookingSettings.objects.get(name="Edit Booking Details")]
        serializer = BookingSettingsSerializer(queryset, many=True)
        if request.method == 'GET':
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


class WebAppBookingView(TemplateView):
    """
    View for handling the booking form.

    Attributes:
        template_name (str): The template used for rendering the view.
        knowledge (dict): A dictionary to store context data for the template.
        options (list): The available time slots.
        FMT (str): The format for time strings.
    """
    template_name = 'webapps/webapps_form.html'
    knowledge = {}
    options = [{"value": i, "text": f"{10 + i}:00", "defaultSelected": True, "selected": False} for i in range(10)]

    FMT = '%H:%M:%S'

    def get(self, request, signedUrl=None, *args, **kwargs):
        """
        Handle GET requests to display the booking form.

        Args:
            request (HttpRequest): The HTTP request object.
            signedUrl (str): The signed URL for the booking.

        Returns:
            HttpResponse: The rendered template with the context data.
        """
        try:
            slot_data = json.loads(
                signing.loads(signedUrl, key=settings.SIGNING_KEY, salt=settings.SIGNING_SALT, max_age=1000))
        except signing.BadSignature:
            return HttpResponseNotFound()

        try:
            token = Token.objects.get(pk=signedUrl)
            if token.limit <= 0:
                token.delete()
                return HttpResponseNotFound()
            token.limit -= 1
            token.save()
        except Token.DoesNotExist:
            return HttpResponseNotFound()

        if not verify_free_slot(datetime.strptime(slot_data.get("date"), "%Y-%m-%d").date(),
                                datetime.strptime(slot_data.get("start_time"), '%H:%M:%S').time(),
                                datetime.strptime(slot_data.get("end_time"), '%H:%M:%S').time(), self.options):
            return HttpResponseNotFound()

        payment_form = PaymentForm(initial={'date': slot_data.get("date"),
                                            'start_time': slot_data.get("start_time"),
                                            'end_time': slot_data.get("end_time")})

        temp_date = datetime(1, 1, 1)
        time_delta = (datetime
                      .combine(temp_date, datetime.strptime(slot_data.get("end_time"), '%H:%M:%S').time()) -
                      datetime.combine(temp_date, datetime.strptime(slot_data.get("start_time"), '%H:%M:%S').time())
                      )
        hour = time_delta.seconds // 3600
        total_amount = BookingSettings.objects.get(name="Edit Booking Details").amount * hour

        context = {'totalAmount': total_amount,
                   'paymentForm': payment_form,
                   'recaptcha_site_key': settings.GOOGLE_RECAPTCHA_SITE_KEY, }
        self.knowledge.update(context)
        return render(request, self.template_name, self.knowledge)


class BookingGateway(APIView):
    """
    API view for handling booking gateway operations.

    Attributes:
        authentication_classes (list): The authentication classes for the view.
        throttle_classes (list): The throttle classes for the view.
    """
    authentication_classes = [SessionAuthentication]
    throttle_classes = [AnonRateThrottle]

    @method_decorator(csrf_protect)
    def post(self, request):
        """
        Handle POST requests to create a signed URL for booking.

        Args:
            request (HttpRequest): The HTTP request object.

        Returns:
            Response: The response containing the signed URL or a 404 status.
        """
        form = SlotForm(request.POST)
        if form.is_valid():
            form_data = form.cleaned_data
            form_data.update({'date': form_data['date'].strftime('%Y-%m-%d'),
                              'start_time': form_data['start_time'].strftime('%H:%M:%S'),
                              'end_time': form_data['end_time'].strftime('%H:%M:%S'),
                              'key': secrets.token_urlsafe()})
            signed_string = signing.dumps(json.dumps(form_data),
                                          key=settings.SIGNING_KEY,
                                          salt=settings.SIGNING_SALT,
                                          compress=True)
            try:
                Token.objects.create(key=signed_string, limit=3)
            except Exception:
                return Response(status=status.HTTP_404_NOT_FOUND)

            signed_url = f'/studio/bookings/{signed_string}'
            return Response({'url': signed_url})
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


class RazorpayGateway(APIView):
    """
    API view for handling Razorpay gateway operations.

    Attributes:
        authentication_classes (list): The authentication classes for the view.
        throttle_classes (list): The throttle classes for the view.
        options (list): The available time slots.
    """
    authentication_classes = [SessionAuthentication]
    throttle_classes = [AnonRateThrottle]
    options = [{"value": i, "text": f"{10 + i}:00", "defaultSelected": True, "selected": False} for i in range(10)]

    @method_decorator(csrf_protect)
    def post(self, request, signedUrl=None):
        """
        Handle POST requests for Razorpay payment gateway.

        Args:
            request (HttpRequest): The HTTP request object.
            signedUrl (str): The signed URL for the booking.

        Returns:
            Response: The response containing payment details or a 404 status.
        """
        if request.is_ajax():
            try:
                slot_data = json.loads(signing.loads(signedUrl,
                                                     key=settings.SIGNING_KEY,
                                                     salt=settings.SIGNING_SALT,
                                                     max_age=1000))
            except signing.BadSignature:
                return Response(status=status.HTTP_404_NOT_FOUND)

            try:
                token = Token.objects.get(pk=signedUrl)
                if token.limit <= 0:
                    token.delete()
                    return Response(status=status.HTTP_404_NOT_FOUND)
                token.limit -= 1
                token.save()
            except Token.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)

            payment_form = PaymentForm(request.POST)
            if payment_form.is_valid():
                recaptcha_response = request.POST.get('g-recaptcha-response')
                data = {'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY, 'response': recaptcha_response}
                r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
                result = r.json()

                if result['success'] and result['score'] >= 0.65:
                    reservation = payment_form.save(commit=False)
                    reservation.status = 1
                    reservation.session = request.session.session_key
                    if verify_free_slot(reservation.date, reservation.start_time, reservation.end_time, self.options):
                        time_delta = datetime.combine(reservation.date, reservation.end_time) - datetime.combine(
                            reservation.date, reservation.start_time)
                        hour = time_delta.seconds // 3600
                        total_amount = BookingSettings.objects.get(name="Edit Booking Details").amount * hour
                        reservation.amount = total_amount

                        order_amount = total_amount * 100
                        order_currency = 'USD'
                        note_string = f'Day: {reservation.date} --> From: {reservation.start_time} Till: {reservation.end_time}'
                        notes = {'Slot Booking': note_string}
                        client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))
                        response_payment = client.order.create(
                            dict(amount=order_amount, currency=order_currency, notes=notes))
                        reservation.order_id = response_payment['id']
                        reservation.save()
                        return Response(
                            {"key": settings.RAZORPAY_KEY_ID,
                             "amount": str(order_amount),
                             "currency": "USD",
                             "name": "NLYTN", "description": "Studio Booking",
                             "image": "https://<ADD HOST>/static/images/NLYTN-black.png", # TODO
                             "order_id": response_payment['id'],
                             "callback_url": "https://<ADD HOST>/studio/bookings/success/", # TODO
                             "prefill": {"email": payment_form.cleaned_data['email_id'],
                                         "contact": str(payment_form.cleaned_data['number'])},
                             "notes": notes,
                             "theme": {"color": "#2b2b2b"}})

            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


@method_decorator(csrf_exempt, name='dispatch')
class SuccessRedirect(TemplateView):
    """
    View for handling successful payment redirection.

    Attributes:
        template_name (str): The template used for rendering the view.
    """
    template_name = 'webapps/webapps_redirect.html'

    def post(self, request):
        """
        Handle POST requests for successful payment redirection.

        Args:
            request (HttpRequest): The HTTP request object.

        Returns:
            HttpResponse: A redirect to the main page after successful payment.
        """
        response = request.POST
        params_dict = {
            'razorpay_order_id': response['razorpay_order_id'],
            'razorpay_payment_id': response['razorpay_payment_id'],
            'razorpay_signature': response['razorpay_signature']
        }

        client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

        try:
            status = client.utility.verify_payment_signature(params_dict)
            reservation = Reservation.objects.get(order_id=response['razorpay_order_id'])
            reservation.payment_id = response['razorpay_payment_id']
            reservation.status = 2
            reservation.save()
            return redirect(reverse('webapps:webapps-index'))
        except:
            return redirect(reverse('webapps:webapps-index'))
