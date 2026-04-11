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

How to Use the API:
Register a user account
Log in to receive a JWT token
Add the token to all protected requests:
Authorization: Bearer YOUR_TOKEN
Use the API to create, view, update, and delete workouts and exercises

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
