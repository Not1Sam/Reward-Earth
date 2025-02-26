# Reward Earth

    Reward Earth is a web application designed to incentivize and reward users for their eco-friendly actions. The application consists of a backend built with Django and a frontend built with React and Vite.

## Features

    - User registration and authentication
    - JWT-based authentication
    - User points system
    - QR code scanning
    - Dark and light theme support
    - Responsive design

## Project Structure

### Backend

    The backend is built with Django and provides RESTful APIs for user management and points system.

BackEnd/ ├── api/ │ ├── init.py │ ├── admin.py │ ├── apps.py │ ├── migrations/ │ ├── models.py │ ├── serializers.py │ ├── tests.py │ ├── urls.py │ └── views.py ├── backend/ │ ├── init.py │ ├── asgi.py │ ├── settings.py │ ├── urls.py │ └── wsgi.py ├── db.sqlite3 ├── dockerfile ├── manage.py └── requirements.txt


### Frontend

    The frontend is built with React and Vite, providing a responsive and interactive user interface.

FrontEnd/ ├── .expo/ ├── public/ ├── src/ │ ├── api.js │ ├── App.css │ ├── App.jsx │ ├── Components/ │ ├── pages/ │ ├── styles/ │ ├── constants.js │ └── main.jsx ├── dockerfile ├── package.json ├── vite.config.js └── index.html

## Installation

### Backend

    1. Navigate to the [`BackEnd`](BackEnd ) directory:
    ```sh
    cd path/to/BackEnd

    2.Create a virtual environment and activate it:
        python -m venv env
        source env/bin/activate  # On Windows use `env\Scripts\activate`

    3.Install the required dependencies:
        pip install -r requirements.txt

    4.Apply the migrations:
        python manage.py migrate

    5.Run the development server:
        python manage.py runserver

### Frontend

    1.Navigate to the FrontEnd directory:
        cd path/to/FrontEnd

    2.Install the required dependencies:
        npm install

    3.Run the development server:
        npm run dev


## Usage
    1. Open your browser and navigate to http://localhost:5173 to access the frontend.

    2. Use the provided endpoints to interact with the backend API.

## Future Updates

The project is currently built with React, but I plan on switching to React Native for better mobile support as the app is mainly intended for mobile use. This migration will involve:

- Setting up a new React Native project
- Replacing HTML elements with React Native components
- Updating styles to use React Native's styling approach
- Handling navigation using React Navigation
- Testing the app on mobile devices
- Optimizing performance for mobile environments
