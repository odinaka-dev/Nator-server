# Nator AI Server

## Overview
Nator AI is built using **Node.js** and the **Express.js** framework. This server is responsible for handling authentication, route protection, and user validation. It manages the login and signup functionality for the Nator AI website while ensuring secure access to its features.

## Tech Stack & Tools
- **Node.js + Express.js** - Backend development
- **MongoDB** - Database management
- **API** - Communication between frontend and backend
- **Postman** - API testing, validation, and error handling

## API Endpoints

### 1. User Signup
- **Method:** `POST`
- **Endpoint:** `/users`
- **Description:** Allows new users to create an account.
- **Request Body:**
  ```json
  {
    "username": "exampleUser",
    "email": "user@example.com",
    "password": "securePassword"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "userId": "12345"
  }
  ```

### 2. User Login
- **Method:** `POST`
- **Endpoint:** `/login`
- **Description:** Authenticates users and generates an access token.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "securePassword"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Login successful",
  }
  ```

### 3. Get Users
- **Method:** `GET`
- **Endpoint:** `/users`
- **Description:** Retrieves the list of users who have logged in.
- **Response:**
  ```json
  {
    "totalUsers": 10-20,
    "users": [
      {
        "id": "12345",
        "email": "user@example.com",
        "password": "exampleUsers"
      }
    ]
  }
  ```

## Security & Authentication
- **Middleware for Route Protection** ensures only authenticated users can access specific features.

## Testing & Debugging
- **Postman** is used to test API endpoints, validate responses, and debug errors.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone [https://github.com/odinaka-dev/Nator-server.git]
   ```
2. Navigate to the project folder:
   ```sh
   cd nator-server
   ```
3. Install all dependencies:
   ```sh
   npm install
   ```
   [body-parser, cors, expressjs, morgan, bycrypt...]
4. Run the server on your local host:
   ```sh
   nodemon index.js
   termminal: server is running on http://localhost:3000
   terminal: Database is connected
   ```

## Contribution
Feel free to contribute by submitting issues and valid update features

## License
This project is licensed under Nator.
