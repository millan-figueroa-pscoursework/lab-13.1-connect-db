# Lab 13.1: Connecting a Database

A basic Node.js/Express application connected to a MongoDB Atlas database.
Starter setup demos connecting to MongoDB, securing environment variables, and returning a simple success message.
<br><br><br>

## Reflection Questions

#### Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?

It is important to whitelist IP addresses because it limits who can get access to the database so only approved servers or computers can connect. This protects the database from random people on the internet trying to break in. If you allow connections from anywhere like 0.0.0.0 or 0 then anyone can try to attack your database or steal information (hackers, bots, etc).

#### What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?

The dotenv package lets me hide secret information like the database url from the code. It loads the values from the env file into process env. That way I can keep passwords out of my code and out of github. In production I would not use a local env file. Another thing the dotenv package does is automatically remove quotes if I accidentally include them in my variable values. One of the lessons on Canvas incorrectly showed `MONGO_URI=mongodb:"//127.0.0.1:27017/userDB"` and after some research I learned that this can cause issues, without the dotenv package we would en up with different values assigned to that variable.

#### If your application failed to connect, what are the first few steps you would take to debug the issue?

First I would check the env file to make sure the connection string is correct,console log the value of process env to see if it is undefined, check if the database user and password are correct. I would also restart the server to reload the environment variables.
<br><br><br>

## Requirements

- Node.js

- MongoDB Atlas account
  <br><br><br>

## Setup

Clone the repository

#### Install dependencies:

`npm install`

#### Create a .env file in the root directory and add connection string (no quotes):

`MONGO_URI=your_connection_string_here`

Add .env to .gitignore.

#### Run the Server

`node server.js`

Server runs on port 3001 by default.

#### Test the Connection

Open browser or use Postman:

`http://localhost:3001/`

If successful, you will see:

`{ "message": "Successfully connected to the database!" }`

### Notes

- Connection string must be stored securely in .env. Without using dotenv package, using quotes may cause "Invalid Signature" error down the line even though it won't throw an error right away. dotenv removes quotes automatically, safer to just not use them in a .env file.

- .gitignore should include:

  - node_modules/
  - .env
