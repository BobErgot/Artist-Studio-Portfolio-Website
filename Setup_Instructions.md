## Setup Environment

1. Create a virtual environment:
    ```bash
    python -m venv env
    ```

2. Activate the virtual environment:

    On Windows:
    ```bash
    .\env\Scripts\activate
    ```

    On macOS/Linux:
    ```bash
    source env/bin/activate
    ```

3. Install required packages:
    ```bash
    pip install -r requirements.txt
    ```

## Make Migrations

1. Make migrations for the `blog` app:
    ```bash
    python manage.py makemigrations blog
    ```

2. Make migrations for the `core` app:
    ```bash
    python manage.py makemigrations core
    ```

3. Make migrations for the `webapps` app:
    ```bash
    python manage.py makemigrations webapps
    ```

## Apply Migrations

1. Apply migrations to the database:
    ```bash
    python manage.py migrate
    ```

## Run Initialization Scripts

1. Populate the database:
    ```bash
    python manage.py populate_db
    ```

2. Populate the studio database:
    ```bash
    python manage.py populate_studio_db
    ```

## Create Superuser

1. Create a superuser for the Django admin:
    ```bash
    python manage.py createsuperuser
    ```

## Run the Server

1. Start the Django development server:
    ```bash
    python manage.py runserver
    ```

---

