# CS 465 Full Stack Development: Travlr Getaways

## Project Overview

Travlr Getaways is a full stack web application built for a travel company that needs both a customer-facing website and an administrator-facing single-page application. The customer side allows users to view travel packages, while the admin side allows authorized users to log in and manage trip data.

The project was built using the MEAN stack:

* MongoDB
* Express
* Angular
* Node.js

The final version of the project includes a RESTful API, MongoDB database integration, an Angular admin SPA, and login authentication using a JSON Web Token. The Angular admin application was also downgraded to Angular 17 during the final module to ensure compatibility with the course environment and grading requirements.

The completed final project source code is located on the `module7` branch.

## Architecture

This full stack project used more than one type of frontend development. The customer-facing side used Express, HTML, JavaScript, and Handlebars templates. This part of the application was rendered on the server and used routes, controllers, views, layouts, and partials to display pages such as the Travel page. The Travel page was updated so that it pulled trip data from the backend API instead of relying on hard-coded static content.

The administrative side of the application used Angular as a single-page application. This frontend was more interactive than the Express-rendered pages because it allowed the admin user to log in, view trips, add new trips, and edit existing trips without manually changing files or directly accessing the database. Angular components were used to separate the interface into smaller reusable pieces, such as trip cards, trip lists, add trip forms, and edit trip forms.

The backend used MongoDB because it is a NoSQL database that works well with JavaScript-based full stack applications. MongoDB stores data in a document format that is very similar to JSON, which made it a good fit for an application that sends and receives JSON data through a REST API. It also allowed trip data to be stored flexibly without needing a rigid relational database structure.

## Functionality

JSON is different from JavaScript because JSON is a data format, while JavaScript is a programming language. JavaScript can use objects, functions, logic, and behavior, but JSON is mainly used to structure and transfer data. In this project, JSON helped connect the frontend and backend because the Express API returned trip data as JSON, and the Angular SPA consumed that JSON to display and update trip information.

One example of refactoring in the project was changing the Travel page from using hard-coded static trip data to using dynamic data from the backend API. This improved the application because trip information could be changed in the database and then displayed on the customer-facing website without manually editing HTML. Another example was separating repeated layout code into Handlebars partials, such as the header and footer. This made the code cleaner and reduced duplication.

The Angular admin application also used reusable UI components. The TripCard component allowed each trip to be displayed using the same layout and logic. This made the application easier to maintain because changes to the trip card design or behavior could be made in one place instead of being repeated across multiple files. Reusable components help improve consistency, reduce errors, and make the application easier to expand in the future.

## Testing

In a full stack application, methods, endpoints, and security all need to be tested carefully. HTTP methods define the type of action being performed. For example, GET retrieves data, POST creates new data, PUT updates existing data, and DELETE removes data. Endpoints are the specific API routes that receive those requests, such as `/api/trips`, `/api/trips/:tripCode`, and `/api/login`.

The API endpoints were tested using Postman to confirm that data could be retrieved, added, updated, and deleted correctly. The GET endpoints were used to return all trips and individual trips. The POST endpoint was used to add new trip records. The PUT endpoint was used to update existing trips. The DELETE endpoint was used to remove test trips. Testing these endpoints helped confirm that the Express API, MongoDB database, and Mongoose models were working together correctly.

Adding security made testing more important because the admin side needed login authentication. The login endpoint was tested to confirm that valid credentials returned a JSON Web Token. The Angular SPA was also tested in the browser by clearing the stored token, refreshing the page, confirming that the user was redirected to the login page, and then logging in again. This helped verify that the admin page was protected and that authorized users could access the trip management features.

## Reflection

This course helped me better understand how the pieces of a full stack application work together. Before this project, I had worked with different parts of software development separately, but this course connected the frontend, backend, database, API, and security pieces into one complete application. Building the Travlr Getaways project helped me see how each layer depends on the others and how important it is to keep the structure organized.

The skills I developed in this course will help me become a more marketable candidate in software development. I gained more experience with Node.js, Express, MongoDB, Mongoose, Angular, TypeScript, REST APIs, JSON, authentication, and API testing with Postman. I also learned how to troubleshoot version compatibility issues, such as downgrading the Angular admin application to Angular 17 so it would run correctly in the course environment.

This project also helped me improve my debugging and problem-solving skills. I had to test backend routes, fix API calls, update the Angular admin interface, connect the frontend to the database, and verify that add and edit functionality worked correctly. These are practical skills that apply directly to real software development jobs. Overall, this course gave me a stronger understanding of full stack development and helped me build a project that I can include in my portfolio.
