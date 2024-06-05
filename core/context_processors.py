from blog.models import Post
from core.models import SocialMedia, LatestReleasesSection, Event


def social_media(request):
    """
    Context processor to include social media links, latest releases count, events count, and posts count in the context.

    This function retrieves data from the SocialMedia, LatestReleasesSection, Event, and Post models
    and calculates counts for music links, social media links, latest releases, events, and posts.

    Args:
        request (HttpRequest): The HTTP request object.

    Returns:
        dict: A dictionary containing the retrieved and calculated data.
    """
    music_links_count = 0
    social_media_links_count = 0

    try:
        social_media_object = SocialMedia.objects.all()
        for link in social_media_object:
            if link.name in ["Spotify", "Apple Music", "Youtube", "SoundCloud"]:
                if link.url and link.url.strip():
                    music_links_count += 1
            elif link.name in ["Instagram", "Facebook", "Twitter", "Email"]:
                if link.url and link.url.strip():
                    social_media_links_count += 1
    except SocialMedia.DoesNotExist:
        social_media_object = None

    try:
        latest_releases_count = LatestReleasesSection.objects.count()
    except LatestReleasesSection.DoesNotExist:
        latest_releases_count = 0

    try:
        events_count = Event.objects.count()
    except Event.DoesNotExist:
        events_count = 0

    try:
        posts_count = Post.objects.count()
    except Post.DoesNotExist:
        posts_count = 0

    return {
        'social_media': social_media_object,
        'music_links_count': music_links_count,
        'social_media_links_count': social_media_links_count,
        'latestReleasesCount': latest_releases_count,
        'eventsCount': events_count,
        'postsCount': posts_count,
    }
