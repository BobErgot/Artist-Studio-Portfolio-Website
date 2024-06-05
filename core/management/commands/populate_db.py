from django.core.management.base import BaseCommand
from core.models import ViewMoreSection, SocialMedia, AboutPage


class Command(BaseCommand):
    """
    Django management command to populate website data.

    This command creates initial data for the ViewMoreSection, SocialMedia, and AboutPage models.
    """
    help = 'Populate website data'

    @staticmethod
    def _create_tags():
        """
        Create initial tags for the website data.

        This method creates and saves instances of ViewMoreSection, SocialMedia, and AboutPage.
        """
        view_more_sections = [
            'About Section',
            'Book A Session Section'
        ]
        social_medias = [
            'Spotify',
            'Apple Music',
            'Youtube',
            'SoundCloud',
            'Instagram',
            'Facebook',
            'Twitter',
            'Email'
        ]

        for section in view_more_sections:
            ViewMoreSection.objects.create(name=section)

        for media in social_medias:
            SocialMedia.objects.create(name=media)

        AboutPage.objects.create(name='About Page Editor')

    def handle(self, *args, **options):
        """
        Handle the execution of the command.

        This method calls the _create_tags method to create and save initial website data.
        """
        self._create_tags()
        self.stdout.write(self.style.SUCCESS('Successfully populated website data'))
