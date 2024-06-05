from django.core.management.base import BaseCommand
from webapps.models import StudioSection, EquipmentSection, Homepage, BookingSettings


class Command(BaseCommand):
    """
    Django management command to populate studio website data.

    This command creates initial data for the StudioSection, EquipmentSection, Homepage,
    and BookingSettings models.
    """
    help = 'Populate studio website data'

    @staticmethod
    def _create_tags():
        """
        Create initial tags for the studio website data.

        This method creates and saves instances of StudioSection, EquipmentSection, Homepage,
        and BookingSettings.
        """
        StudioSection.objects.create(name='Studio Section')
        EquipmentSection.objects.create(name='Equipment Section')
        Homepage.objects.create(name='Homepage')
        BookingSettings.objects.create(name='Edit Booking Details', amount=1500, date='2024-12-31')

    def handle(self, *args, **options):
        """
        Handle the execution of the command.

        This method calls the _create_tags method to create and save initial studio website data.
        """
        self._create_tags()
        self.stdout.write(self.style.SUCCESS('Successfully populated studio website data'))
