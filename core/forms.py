from django import forms
from core.models import Message


class ContactForm(forms.ModelForm):
    """
    A form for users to submit contact queries.

    This form includes fields for email, name, query, and an option to receive newsletters.
    """
    email = forms.EmailField(
        max_length=200,
        widget=forms.TextInput(attrs={'placeholder': 'Email Address*', 'type': 'email'}),
        label=''
    )
    name = forms.CharField(
        max_length=255,
        required=False,
        widget=forms.TextInput(attrs={'placeholder': 'Name'}),
        label=''
    )
    query = forms.CharField(
        max_length=1000,
        widget=forms.TextInput(attrs={'placeholder': 'Message'}),
        label=''
    )
    receive_newsletter = forms.BooleanField(
        required=False,
        label=''
    )

    def __init__(self, *args, **kwargs):
        """
        Initialize the ContactForm with default values and custom attributes.
        """
        super(ContactForm, self).__init__(*args, **kwargs)
        self.fields['receive_newsletter'].initial = True

    class Meta:
        """
        Meta class for ContactForm to specify the model and fields.
        """
        model = Message
        fields = ('email', 'name', 'query', 'receive_newsletter')
