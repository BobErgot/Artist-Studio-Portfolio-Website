from django.contrib import admin
from webapps.models import (
    StudioSection, StudioImage, EquipmentSection, SpecSection,
    Homepage, Testimonials, Reservation, BookingSettings
)

class StudioSectionAdmin(admin.ModelAdmin):
    """
    Admin interface options for the StudioSection model.
    """
    exclude = ("name",)
    readonly_fields = ('name',)

    def has_add_permission(self, request):
        """
        Disable the add functionality for the StudioSection model.
        """
        return False

    def has_delete_permission(self, request, obj=None):
        """
        Disable the delete functionality for the StudioSection model.
        """
        return False


class EquipmentSectionAdmin(admin.ModelAdmin):
    """
    Admin interface options for the EquipmentSection model.
    """
    exclude = ("name",)
    readonly_fields = ('name',)

    def has_add_permission(self, request):
        """
        Disable the add functionality for the EquipmentSection model.
        """
        return False

    def has_delete_permission(self, request, obj=None):
        """
        Disable the delete functionality for the EquipmentSection model.
        """
        return False


class StudioImageAdmin(admin.ModelAdmin):
    """
    Admin interface options for the StudioImage model.
    """
    pass


class SpecSectionAdmin(admin.ModelAdmin):
    """
    Admin interface options for the SpecSection model.
    """
    pass


class HomepageAdmin(admin.ModelAdmin):
    """
    Admin interface options for the Homepage model.
    """
    exclude = ("name",)
    readonly_fields = ('name',)

    def has_add_permission(self, request):
        """
        Disable the add functionality for the Homepage model.
        """
        return False

    def has_delete_permission(self, request, obj=None):
        """
        Disable the delete functionality for the Homepage model.
        """
        return False


class TestimonialsAdmin(admin.ModelAdmin):
    """
    Admin interface options for the Testimonials model.
    """
    pass


class ReservationAdmin(admin.ModelAdmin):
    """
    Admin interface options for the Reservation model.
    """
    pass


class BookingSettingsAdmin(admin.ModelAdmin):
    """
    Admin interface options for the BookingSettings model.
    """
    exclude = ("name",)
    readonly_fields = ('name',)

    def has_add_permission(self, request):
        """
        Disable the add functionality for the BookingSettings model.
        """
        return False

    def has_delete_permission(self, request, obj=None):
        """
        Disable the delete functionality for the BookingSettings model.
        """
        return False


admin.site.register(StudioSection, StudioSectionAdmin)
admin.site.register(StudioImage, StudioImageAdmin)
admin.site.register(EquipmentSection, EquipmentSectionAdmin)
admin.site.register(SpecSection, SpecSectionAdmin)
admin.site.register(Homepage, HomepageAdmin)
admin.site.register(Testimonials, TestimonialsAdmin)
admin.site.register(Reservation, ReservationAdmin)
admin.site.register(BookingSettings, BookingSettingsAdmin)
