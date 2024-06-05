import requests
from django.contrib import messages
from django.http import HttpResponseNotFound
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views.generic import TemplateView
from meta.views import Meta
from blog.models import Post
from core.forms import ContactForm
from artist import settings


class PostView(TemplateView):
    """
    View for displaying individual blog posts.

    Attributes:
        template_name (str): The template used for rendering the view.
        knowledge (dict): A dictionary to store context data for the template.
        meta (Meta): Meta information for SEO and social media sharing.
    """
    template_name = 'blog/blog_post.html'
    knowledge = {}
    meta = None

    def get(self, request, pk, slug):
        """
        Handle GET requests to display a blog post.

        Args:
            request (HttpRequest): The HTTP request object.
            pk (int): The primary key of the post.
            slug (str): The slug of the post.

        Returns:
            HttpResponse: The rendered template with the post data, or a 404 response if the post is not found.
        """
        try:
            post = Post.objects.get(pk=pk)
            if slug != post.url_slug:
                return HttpResponseNotFound()
        except Post.DoesNotExist:
            return HttpResponseNotFound()

        contact_form = ContactForm()
        self.meta = Meta(
            use_title_tag=True,
            use_og=True,
            use_twitter=True,
            use_facebook=True,
            title=f"{post.title} | NLYTN Blog",
            description=post.description,
            keywords=['electrifying', 'melodies', 'NLYTN', 'trance', 'music', 'songs', 'disco'],
            url=f"/blog/{pk}/{slug}",
            image=post.image.url,
            object_type='website',
            site_name='NLYTN Blogs',
            twitter_site='@musicbynlytn',
            twitter_creator='@musicbynlytn',
            twitter_type='summary_large_image',
        )
        data = {
            "post": post,
            'contactForm': contact_form,
            'recaptcha_site_key': settings.GOOGLE_RECAPTCHA_SITE_KEY,
            'meta': self.meta,
        }
        self.knowledge.update(data)
        return render(request, self.template_name, self.knowledge)

    def post(self, request, pk, slug):
        """
        Handle POST requests to process the contact form.

        Args:
            request (HttpRequest): The HTTP request object.
            pk (int): The primary key of the post.
            slug (str): The slug of the post.

        Returns:
            HttpResponse: A redirect to the post detail page with a success or error message.
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
                return redirect(reverse('blog:post_detail', args=[pk, slug]) + '#footer')

            messages.error(request, 'Unable to send message. Please try again later.')
            return redirect(reverse('blog:post_detail', args=[pk, slug]) + '#footer')

        args = {'contactForm': ContactForm()}
        self.knowledge.update(args)
        return render(request, self.template_name, self.knowledge)