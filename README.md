# Visitor Registration System Vue App

This project was build using Vue, PostgreSQL, Express and Node.js

This app is made in order to track the people that are coming to have a meeting or simply to meet with wirelab employees.
It displays the process that helps Wirelab to keep track of people that visite their location.

## Installation

- Install dependencies

<pre><code>npm install</code></pre>

## Usage

### For dev server:

1. Go to the root folder

<pre><code>node index</code></pre>

or

<pre><code>nodemon index</code></pre>

### For Client

1. Go to the client folder

<pre><code>npm run serve</code></pre>

### For running the client and the server together

1. Go to the root folder

<pre><code>npm run dev</code></pre>

#### Project structure

- client/src: Vue
- - assets : All static assets and styling files.
- - store : The ontainer that holds the applications state, actions, mutations, getters etc.
- - views : Pages that are in the router.
- - components : Reusable blocks of code that are used in differents parts of the app.
- index.js : Server
- db : sql file that displays the necessary tables and databases for building the db, db.js file that initialises a database connection.
- middleware : The necessary verifying function that help us to verify jwt's recieved from request headers.

## Use Guide

- ### Adding a new visitor

1. Click '+ New visitor' on Navigation bar.
2. Fill the all the required fields on the visitor form.
3. Click on submit.

If everything goes well, the new visitor will be added.
If not, an alert will pop up on the top of the screen and you will be onformed about what went wrong.

- ### Seeing the visitors

  Every user must be logged in with their google account in order to see visitors and visitors that are currently in the building or ending their visits.

- ### I don't have a google account

  Hmmm.. that's impossible. :)

- ### Ending a visit

1. Go to the home page.
2. You will see the current visitors and an 'End' button next to their information.
3. Click on End button.

- ### Displaying visitor details

1.  Go to the visitors by clicking visitors on navigation bar.
2.  Find the visitor whom you would to see details of.
3.  Click on the visitor's name.
4.  Viola.

- ### What if the same visitor comes more than once?
  If the same visitor comes one more time, than their visit will be saved to their already existing details. And all of their visits will be accessible from their details page. Briefly, nothing will change.
