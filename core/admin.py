from django.contrib import admin
from core.models import ViewMoreSection, SocialMedia, LatestReleasesSection, Message, Event, AboutPage


class ViewMoreSectionAdmin(admin.ModelAdmin):
    """
    Admin interface options for the ViewMoreSection model.
    """
    exclude = ("name",)
    readonly_fields = ('name',)

    def has_add_permission(self, request):
        """
        Disable the add functionality for the ViewMoreSection model.
        """
        return False

    def has_delete_permission(self, request, obj=None):
        """
        Disable the delete functionality for the ViewMoreSection model.
        """
        return False


class SocialMediaAdmin(admin.ModelAdmin):
    """
    Admin interface options for the SocialMedia model.
    """
    exclude = ("name",)
    readonly_fields = ('name',)

    def has_add_permission(self, request):
        """
        Disable the add functionality for the SocialMedia model.
        """
        return False

    def has_delete_permission(self, request, obj=None):
        """
        Disable the delete functionality for the SocialMedia model.
        """
        return False


class LatestReleasesSectionAdmin(admin.ModelAdmin):
    """
    Admin interface options for the LatestReleasesSection model.
    """
    pass


class MessageAdmin(admin.ModelAdmin):
    """
    Admin interface options for the Message model.
    """

    def has_add_permission(self, request):
        """
        Disable the add functionality for the Message model.
        """
        return False

    def has_change_permission(self, request, obj=None):
        """
        Disable the change functionality for the Message model.
        """
        return False


class EventAdmin(admin.ModelAdmin):
    """
    Admin interface options for the Event model.
    """
    pass


class AboutPageAdmin(admin.ModelAdmin):
    """
    Admin interface options for the AboutPage model.
    """
    exclude = ("name",)
    readonly_fields = ('name',)

    def has_add_permission(self, request):
        """
        Disable the add functionality for the AboutPage model.
        """
        return False

    def has_delete_permission(self, request, obj=None):
        """
        Disable the delete functionality for the AboutPage model.
        """
        return False


admin.site.register(ViewMoreSection, ViewMoreSectionAdmin)
admin.site.register(SocialMedia, SocialMediaAdmin)
admin.site.register(LatestReleasesSection, LatestReleasesSectionAdmin)
admin.site.register(Message, MessageAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(AboutPage, AboutPageAdmin)
