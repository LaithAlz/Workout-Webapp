# MERN Workout App

Welcome to the MERN Workout App repository! This application provides a platform for users to log in, save their workout data, and manage their workouts. It is built using the MERN stack, consisting of MongoDB, Express.js, React, and Node.js.


## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)

## Features

- User authentication and login using JSON Web Tokens (JWT)
- Logging and managing workout data
- CRUD operations for workouts (Create, Read, Update, Delete)
- Frontend-backend interaction through API endpoints

## Technologies

- Frontend: React (JavaScript)
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/mern-workout-app.git
2. Navigate to the project directory:
   ```bash
   cd mern-workout-app
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
4. Install backend dependencies:
   ```bash
   cd ../backend
   npm install

## Usage

1. Start the MongoDB database server.
2. Start the backend server:
   ```bash
   cd backend
   npm start
3. In a separate terminal, start the frontend development server:
   ```bash
   cd frontend
   npm start
4. Access the app in your browser at http://localhost:3000.


## Authentication

User authentication in the MERN Workout App is implemented using JSON Web Tokens (JWT). Here's how it works:

- **Signup**: Users can create an account by providing a valid email and password. Passwords are securely hashed before storage.

- **Login**: Registered users can log in using their email and password. Upon successful login, a JWT is generated and provided to the user for authentication in subsequent requests.

- **Authorization**: To access protected routes, clients must include the JWT token in the request headers. The server verifies the token's authenticity and grants access if it's valid.

To use authentication features:

1. **Signup**: Create a new user account by providing a valid email and password.

2. **Login**: Log in using your registered email and password. Upon successful login, you will receive a JWT token.

3. **Authorization**: Include the JWT token in the `Authorization` header of your API requests to access protected routes. For example:

   ```http
   GET /api/workouts
   Authorization: Bearer your-jwt-token-here


## API Endpoints

The MERN Workout App provides the following API endpoints to interact with the backend and manage workout data:

- **Get All Workouts:**

  - **Endpoint:** `GET /api/workouts`
  - **Description:** Retrieve a list of all workouts.
  - **Authentication:** No authentication required.

- **Create a New Workout:**

  - **Endpoint:** `POST /api/workouts`
  - **Description:** Create a new workout with a title, load (in kg), and reps.
  - **Authentication:** User must be logged in with a valid JWT token. Include the token in the `Authorization` header as `Bearer your-jwt-token-here`.

- **Get Workout Details:**

  - **Endpoint:** `GET /api/workouts/:id`
  - **Description:** Retrieve details of a specific workout by providing its unique ID.
  - **Authentication:** No authentication required.

- **Update Workout:**

  - **Endpoint:** `PATCH /api/workouts/:id`
  - **Description:** Update an existing workout's details, including the title, load, and reps.
  - **Authentication:** User must be logged in with a valid JWT token. Include the token in the `Authorization` header as `Bearer your-jwt-token-here`.

- **Delete Workout:**

  - **Endpoint:** `DELETE /api/workouts/:id`
  - **Description:** Delete a workout by providing its unique ID.
  - **Authentication:** User must be logged in with a valid JWT token. Include the token in the `Authorization` header as `Bearer your-jwt-token-here`.

These API endpoints allow you to perform CRUD (Create, Read, Update, Delete) operations on workout data, making it easy to manage your workout routines through the app.
