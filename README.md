# fitness-tracker-api

# Personal Fitness Tracker API

## Project Overview

The Personal Fitness Tracker API is a backend RESTful service built using Node.js and Express.js. It allows users to log workouts and exercises, track fitness progress, and manage their training data over time.

This project demonstrates backend development skills including RESTful API design, database modeling, authentication, and role-based authorization.

Users can create accounts, log in securely, and manage their own workouts and exercises. Admin users have additional permissions to manage all user data.

---

## Features

- User registration and login system
- JWT-based authentication
- Role-based access control (User / Admin)
- Create, read, update, and delete workouts
- Create, read, update, and delete exercises
- Relational database using Sequelize ORM
- Secure password hashing using bcrypt
- Error handling for API requests

---

## Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- SQLite
- JSON Web Tokens (JWT)
- bcrypt
- Postman (for testing)

---

## How to Run the Project

1. Clone the repository
bash id="k2l1q8"
git clone [https://github.com/amollica-analytics/fitness-tracker-api.git]
cd fitness-tracker-api

3. Install dependencies
npm install

4. Create environment variables

Create a .env file in the root folder:

JWT_SECRET=supersecretkey

4. (Optional) Seed the database
npm run seed

This will create sample users, workouts, and exercises.

5. Start the server
node server.js

The API will run at:

http://localhost:3000

## Authentication Guide
Step 1: Register User

POST /auth/register

{
  "username": "john",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"
}
Step 2: Login User

POST /auth/login

{
  "email": "john@example.com",
  "password": "password123"
}

Response:

{
  "token": "JWT_TOKEN_HERE"
}
Step 3: Add Token to Requests

Add this header to ALL protected routes:

Authorization: Bearer YOUR_TOKEN
User Roles & Permissions

User
Can manage their own workouts
Can view exercises
Cannot access other users' data

Admin
Full access to all users
Can delete users
Can access all workouts and exercises
API Endpoints

Users
Method	Endpoint	Access
GET	/users	Admin
DELETE	/users/:id	Admin

Workouts
Method	Endpoint	Access
POST	/workouts	Auth User
GET	/workouts	Auth User
DELETE	/workouts/:id	Owner/Admin

Exercises
Method	Endpoint	Access
POST	/exercises	Auth User
GET	/exercises	Auth User

Error Handling
401 Unauthorized
{ "message": "No token provided" }
403 Forbidden
{ "message": "Forbidden - insufficient permissions" }
404 Not Found
{ "message": "Resource not found" }
500 Server Error
{ "message": "Internal Server Error" }
Postman Documentation:
[https://documenter.getpostman.com/view/52311306/2sBXitCmzG]

Project Highlights

This project demonstrates:

REST API development using Express
Relational database design using Sequelize
Authentication using JWT
Role-based authorization (User vs Admin)
Full CRUD functionality
Secure password hashing with bcrypt
API testing with Postman
