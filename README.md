# Lab 13.1: Connecting a Database

A basic Node.js/Express application connected to a MongoDB Atlas database.
Starter setup demos connecting to MongoDB, securing environment variables, and returning a simple success message.

## Requirements

- Node.js

- MongoDB Atlas account

## Setup

Clone the repository

### Install dependencies:

`npm install`

### Create a .env file in the root directory and add connection string (no quotes):

`MONGO_URI=your_connection_string_here`

Add .env to .gitignore.

### Run the Server

`node server.js`

Server runs on port 3001 by default.

### Test the Connection

Open browser or use Postman:

`http://localhost:3001/`

If successful, you will see:

`{ "message": "Successfully connected to the database!" }`

### Notes

- Connection string must be stored securely in .env. Without using dotenv package, using quotes may cause "Invalid Signature" error down the line even though it won't throw an error right away. dotenv removes quotes automatically, safer to just not use them in a .env file.

- .gitignore should include:

  - node_modules/
  - .env

### Purpose

This lab demonstrates:

- Creating an Express server

- Connecting to MongoDB Atlas

- Using environment variables for secure configuration
