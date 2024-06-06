# API Endpoints

## Core API Endpoints

### GET /
Retrieve the home page of the site.

**Response:**
- 200 OK: Returns the home page content.

### GET /about/
Retrieve the about page of the site.

**Response:**
- 200 OK: Returns the about page content.

## Blog API Endpoints

### GET /blog/<int:pk>/<slug:slug>/
Retrieve a specific blog post based on the primary key and slug.

**Response:**
- 200 OK: Returns the blog post details.
- 404 Not Found: If the blog post does not exist or the slug does not match.

### POST /blog/<int:pk>/<slug:slug>/
Submit a contact form related to a specific blog post.

**Request:**
- Form Data: Contact form fields including reCAPTCHA response.

**Response:**
- 302 Found: Redirects to the blog post detail page with a success or error message.
- 404 Not Found: If the blog post does not exist or the slug does not match.

## Core App API Endpoints

### GET /api/core/social_media/
Retrieve social media links, counts of music links, social media links, latest releases, events, and posts.

**Response:**
- 200 OK: Returns the social media links and counts.

### GET /api/core/contact_form/
Retrieve the contact form.

**Response:**
- 200 OK: Returns the contact form.

### POST /api/core/contact_form/
Submit the contact form.

**Request:**
- Form Data: Contact form fields including reCAPTCHA response.

**Response:**
- 200 OK: Returns a success message.
- 400 Bad Request: Returns an error message if the form is invalid.

## Webapps API Endpoints

### GET /api/webapps/reservation/
Retrieve a list of reservations.

**Response:**
- 200 OK: Returns the list of reservations.

### GET /api/webapps/reservation/<int:id>/
Retrieve a specific reservation based on the ID.

**Response:**
- 200 OK: Returns the reservation details.
- 404 Not Found: If the reservation does not exist.

### POST /api/webapps/reservation/
Create a new reservation.

**Request:**
- JSON Body: Reservation fields including email_id, number, date, start_time, and end_time.

**Response:**
- 201 Created: Returns the created reservation.
- 400 Bad Request: Returns an error message if the request is invalid.

### PUT /api/webapps/reservation/<int:id>/
Update an existing reservation based on the ID.

**Request:**
- JSON Body: Reservation fields including email_id, number, date, start_time, and end_time.

**Response:**
- 200 OK: Returns the updated reservation.
- 404 Not Found: If the reservation does not exist.
- 400 Bad Request: Returns an error message if the request is invalid.

### DELETE /api/webapps/reservation/<int:id>/
Delete a specific reservation based on the ID.

**Response:**
- 204 No Content: The reservation was successfully deleted.
- 404 Not Found: If the reservation does not exist.
