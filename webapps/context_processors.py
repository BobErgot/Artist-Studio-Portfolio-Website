from webapps.models import EquipmentSection, SpecSection, Homepage


def data_initializer(request):
    """
    Initialize data for the web application context.

    This function retrieves data from the EquipmentSection, SpecSection, and Homepage models
    and provides it in the context for templates.

    Args:
        request (HttpRequest): The HTTP request object.

    Returns:
        dict: A dictionary containing the retrieved data for equipment, spec section count, and homepage.
    """
    try:
        equipment = EquipmentSection.objects.get(name="Equipment Section")
    except EquipmentSection.DoesNotExist:
        equipment = None

    try:
        spec_section_count = SpecSection.objects.count()
    except SpecSection.DoesNotExist:
        spec_section_count = 0

    try:
        homepage = Homepage.objects.get(name="Homepage")
    except Homepage.DoesNotExist:
        homepage = None

    return {
        'equipment': equipment,
        'specSectionCount': spec_section_count,
        'homepage': homepage,
    }
