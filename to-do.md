# To-Do List (MVP)

## Task 1 — MongoDB Setup

- [x] Make MongoDB acct reate a free M0 Cluster in Atlas

- [x] Add a new database user (read & write permissions).

- [x] Set network access to 0.0.0.0/0.

- [x] Copy the MongoDB connection string.

## Task 2 — Initialize Node.js/Express

- [x] Install packages:
      `npm install express mongodb dotenv`

- [x] Create .gitignore → add:

`node_modules/
.env`

- [x] Create .env file and add (note - the lesson is wrong, there should be no quotes in a .env file. dotenv removes them automatically.):
      `MONGO_URI=your_connection_string_here`

## Task 3 — Create Server

- [x] Create file: server.js

- [x] Import modules: express, mongodb, dotenv

- [x] Load .env variables

- [x] Create the express app

- [x] Pick a port (3001)

- [x] Use MongoClient to connect to MongoDB

- [x] Create GET route /:

If connection works return { message: "Successfully connected to the database!" }

If connection fails return 500 + { message: "Failed to connect to the database." }

- [x] Start the server.

## Task 4 — Test & Submit

- [x] Run server:
      `node server.js`

- [x] Go to:
      `http://localhost:3001/`

- [x] Confirm success message appears.

- [x] Push project to GitHub (without .env)

- [x] Submit the GitHub repo link.
