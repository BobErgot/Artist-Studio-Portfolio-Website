import requests
from django.contrib import messages
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views.generic import TemplateView
from meta.views import Meta

from blog.models import Post
from core.forms import ContactForm
from core.models import ViewMoreSection, LatestReleasesSection, Event, AboutPage
from artist import settings


class IndexView(TemplateView):
    """
    View for the index page of the site.

    Attributes:
        template_name (str): The template used for rendering the view.
        knowledge (dict): A dictionary to store context data for the template.
        meta (Meta): Meta information for SEO and social media sharing.
    """
    template_name = 'core/index.html'
    knowledge = {}
    meta = Meta(
        use_title_tag=True,
        use_og=True,
        use_twitter=True,
        use_facebook=True,
        title="NLYTN - Be A Pilgrim Of Electrifying And Spine-Chilling Music",
        description="Be A Pilgrim of this journey through sound electrifying drops and spine-chilling melodies",
        keywords=['electrifying', 'melodies', 'NLYTN', 'trance', 'music', 'songs', 'disco'],
        url='/',
        image='https://<ADD HOST>/static/images/background/nlytn-live-concert.jpg', # TODO
        object_type='website',
        site_name='NLYTN - Siddhesh Parekh',
        twitter_site='@musicbynlytn',
        twitter_creator='@musicbynlytn',
        twitter_type='summary_large_image',
    )

    def get(self, request, *args, **kwargs):
        """
        Handle GET requests to display the index page.

        Args:
            request (HttpRequest): The HTTP request object.

        Returns:
            HttpResponse: The rendered template with the context data.
        """
        try:
            about = ViewMoreSection.objects.get(name="About Section")
        except ViewMoreSection.DoesNotExist:
            about = None
        try:
            book_a_session = ViewMoreSection.objects.get(name="Book A Session Section")
        except ViewMoreSection.DoesNotExist:
            book_a_session = None
        try:
            latest_releases = LatestReleasesSection.objects.all()
        except LatestReleasesSection.DoesNotExist:
            latest_releases = None
        try:
            events = Event.objects.all().order_by('date')
        except Event.DoesNotExist:
            events = None
        try:
            posts = Post.objects.all().order_by('-created_on')
        except Post.DoesNotExist:
            posts = None

        contact_form = ContactForm()
        data = {
            'about': about,
            'bookASession': book_a_session,
            'latestReleases': latest_releases,
            'contactForm': contact_form,
            'recaptcha_site_key': settings.GOOGLE_RECAPTCHA_SITE_KEY,
            'events': events,
            'posts': posts,
            'meta': self.meta,
        }
        self.knowledge.update(data)
        return render(request, self.template_name, self.knowledge)

    def post(self, request):
        """
        Handle POST requests to submit the contact form.

        Args:
            request (HttpRequest): The HTTP request object.

        Returns:
            HttpResponse: A redirect to the index page with a success or error message.
        """
        contact_form = ContactForm(request.POST)
        if contact_form.is_valid():
            recaptcha_response = request.POST.get('g-recaptcha-response')
            data = {
                'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
                'response': recaptcha_response
            }
            r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
            result = r.json()

            if result['success'] and result['score'] > 0.65:
                contact_form.save()
                messages.success(request, "Message submitted successfully!")
                return redirect(reverse('core:index') + '#footer')

            messages.error(request, 'Unable to send message. Please try again later.')
            return redirect(reverse('core:index') + '#footer')

        args = {'contactForm': ContactForm()}
        self.knowledge.update(args)
        return render(request, self.template_name, self.knowledge)


class AboutView(TemplateView):
    """
    View for the about page of the site.

    Attributes:
        template_name (str): The template used for rendering the view.
        knowledge (dict): A dictionary to store context data for the template.
        meta (Meta): Meta information for SEO and social media sharing.
    """
    template_name = 'core/about.html'
    knowledge = {}
    meta = Meta(
        use_title_tag=True,
        use_og=True,
        use_twitter=True,
        use_facebook=True,
        title="About NLYTN And Siddhesh Parekh",
        description="NLYTN curates a funky adventure of sonic storytelling which is enthralled by a deep "
                    "understanding of the boundless emotional spectrum, kindled by our music",
        keywords=['NLYTN', 'Siddhesh Parekh', 'NLYTN', 'storytelling', 'music', 'songs', 'emotional'],
        url='/about',
        image='https://<ADD HOST>/static/images/background/siddhesh-parekh-nlytn.jpg', # TODO
        object_type='website',
        site_name='About NLYTN and Siddhesh Parekh',
        twitter_site='@musicbynlytn',
        twitter_creator='@musicbynlytn',
        twitter_type='summary_large_image',
    )

    def get(self, request, *args, **kwargs):
        """
        Handle GET requests to display the about page.

        Args:
            request (HttpRequest): The HTTP request object.

        Returns:
            HttpResponse: The rendered template with the context data.
        """
        try:
            about_page = AboutPage.objects.get(name="About Page Editor")
        except AboutPage.DoesNotExist:
            about_page = None

        contact_form = ContactForm()
        data = {
            'aboutPage': about_page,
            'contactForm': contact_form,
            'recaptcha_site_key': settings.GOOGLE_RECAPTCHA_SITE_KEY,
            'meta': self.meta,
        }
        self.knowledge.update(data)
        return render(request, self.template_name, self.knowledge)

    def post(self, request):
        """
        Handle POST requests to submit the contact form.

        Args:
            request (HttpRequest): The HTTP request object.

        Returns:
            HttpResponse: A redirect to the about page with a success or error message.
        """
        contact_form = ContactForm(request.POST)
        if contact_form.is_valid():
            recaptcha_response = request.POST.get('g-recaptcha-response')
            data = {
                'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
                'response': recaptcha_response
            }
            r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
            result = r.json()

            if result['success'] and result['score'] > 0.65:
                contact_form.save()
                messages.success(request, "Message submitted successfully!")
                return redirect(reverse('core:about') + '#footer')

            messages.error(request, 'Unable to send message. Please try again later.')
            return redirect(reverse('core:about') + '#footer')

        args = {'contactForm': ContactForm()}
        self.knowledge.update(args)
        return render(request, self.template_name, self.knowledge)
