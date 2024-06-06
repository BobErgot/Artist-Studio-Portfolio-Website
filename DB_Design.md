# Database Design

## Tables and Relationships

### Post Table

- **title**: `CharField` - The title of the post (unique).
- **url_slug**: `AutoSlugField` - A URL-friendly slug generated from the title (unique).
- **image**: `ImageField` - An image associated with the post.
- **description**: `CharField` - A short description of the post.
- **body**: `RichTextField` - The main content of the post.
- **created_on**: `DateTimeField` - The date and time when the post was created.
- **last_modified**: `DateTimeField` - The date and time when the post was last modified.

### ViewMoreSection Table

- **name**: `CharField` - The name of the section.
- **description**: `TextField` - A brief description of the section.
- **button**: `CharField` - The text for the button.
- **image**: `ImageField` - An image for the section.

### SocialMedia Table

- **name**: `CharField` - The name of the social media platform.
- **url**: `TextField` - The URL of the social media profile.

### LatestReleasesSection Table

- **album**: `CharField` - The name of the album.
- **artist**: `TextField` - The name of the artist.
- **trackId**: `CharField` - The track ID.

### Message Table

- **email**: `EmailField` - The email of the sender.
- **name**: `CharField` - The name of the sender.
- **query**: `CharField` - The content of the message.
- **receive_newsletter**: `BooleanField` - Whether the sender wants to receive newsletters.

### Event Table

- **date**: `DateField` - The date of the event.
- **concert_name**: `CharField` - The name of the concert.
- **location**: `CharField` - The location of the event.
- **tickets**: `CharField` - Information about the tickets.
- **booking_url**: `CharField` - URL for booking tickets.

### AboutPage Table

- **name**: `CharField` - The name of the about page section.
- **title**: `CharField` - The title of the about page.
- **image**: `ImageField` - An image for the about page section.
- **quote**: `CharField` - A quote for the about page section.
- **body**: `RichTextField` - The body content of the about page.

### StudioSection Table

- **name**: `CharField` - The name of the studio section.
- **title**: `CharField` - The title of the studio section.
- **description**: `TextField` - A brief description of the studio section.
- **summary**: `RichTextField` - A detailed summary of the studio section.
- **images**: `ManyToManyField` - A collection of images related to the studio section.

### EquipmentSection Table

- **name**: `CharField` - The name of the equipment section.
- **title**: `CharField` - The title of the equipment section.
- **description**: `TextField` - A brief description of the equipment section.
- **images**: `ManyToManyField` - A collection of images related to the equipment section.

### SpecSection Table

- **title**: `CharField` - The title of the specification section.
- **description**: `RichTextField` - A detailed description of the specification section.

### StudioImage Table

- **name**: `CharField` - The name of the image.
- **image**: `ImageField` - The image file.

### Homepage Table

- **name**: `CharField` - The name of the homepage section.
- **image**: `ImageField` - The image file for the homepage.
- **description**: `TextField` - A brief description of the homepage.
- **button**: `CharField` - The text for the button on the homepage.

### Testimonials Table

- **name**: `CharField` - The name of the person giving the testimonial.
- **reviews**: `TextField` - The review text.

### BookingSettings Table

- **name**: `CharField` - The name of the booking settings section.
- **amount**: `IntegerField` - The amount for the booking.
- **date**: `DateField` - The date for the booking.

### Reservation Table

- **created_at**: `DateTimeField` - The date and time when the reservation was created.
- **updated_at**: `DateTimeField` - The date and time when the reservation was last updated.
- **email_id**: `EmailField` - The email ID of the person making the reservation.
- **number**: `PositiveBigIntegerField` - The phone number of the person making the reservation.
- **date**: `DateField` - The date of the reservation.
- **start_time**: `TimeField` - The start time of the reservation.
- **end_time**: `TimeField` - The end time of the reservation.
- **status**: `IntegerField` - The status of the reservation.
- **amount**: `PositiveIntegerField` - The amount for the reservation.
- **order_id**: `CharField` - The order ID for the reservation.
- **payment_id**: `CharField` - The payment ID for the reservation.

### Token Table

- **key**: `CharField` - The key for the token.
- **limit**: `IntegerField` - The limit for the token usage.

### Relationships

- **Post**: No foreign keys or relationships with other tables.
- **ViewMoreSection**: No foreign keys or relationships with other tables.
- **SocialMedia**: No foreign keys or relationships with other tables.
- **LatestReleasesSection**: No foreign keys or relationships with other tables.
- **Message**: No foreign keys or relationships with other tables.
- **Event**: No foreign keys or relationships with other tables.
- **AboutPage**: No foreign keys or relationships with other tables.
- **StudioSection**: Many-to-many relationship with StudioImage.
- **EquipmentSection**: Many-to-many relationship with StudioImage.
- **SpecSection**: No foreign keys or relationships with other tables.
- **StudioImage**: No foreign keys or relationships with other tables.
- **Homepage**: No foreign keys or relationships with other tables.
- **Testimonials**: No foreign keys or relationships with other tables.
- **BookingSettings**: No foreign keys or relationships with other tables.
- **Reservation**: Unique together constraint on date and start_time.
- **Token**: No foreign keys or relationships with other tables.
