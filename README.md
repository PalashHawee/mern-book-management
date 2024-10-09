# Book Management Store

A web application built on the MERN stack (MongoDB, Express, React, Node.js) with Tailwind CSS. The application allows users to manage books, providing functionalities for login, logout, and signup. Users can view free books on the homepage, but must be logged in to access the course page.

## Features

- **User Authentication**: Sign up, log in, and log out functionalities.
- **Free Books**: Access to a selection of free books on the homepage.
- **Course Page**: Restricted access; users must be logged in to view.
- **Responsive Design**: Built using Tailwind CSS for a modern UI.



## Installation
cd backend
npm install
cd frontend 
npm install

## Usage
Visit the homepage to view available free books.
Use the login/signup forms to access the course page.
Log out to return to the homepage.

## Flowchart

Here’s a simple flowchart illustrating the user interaction process:

```plaintext
[Start]
   |
   v
[Homepage]
   |
   v
[View Free Books] <-----------------
   |                                   |
   v                                   |
[Login Required?]                      |
   |                                   |
   |                                   |
   v                                   |
[No]                              [Yes]
   |                                   |
   v                                   v
[Logout]                            [Login/Signup]
   |                                   |
   v                                   |
[Access Course Page] <----------------
   |
   v
[End]

 
