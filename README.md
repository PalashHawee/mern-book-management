# Book Management Store

A web application built on the MERN stack (MongoDB, Express, React, Node.js) with Tailwind CSS. The application allows users to manage books, providing functionalities for login, logout, and signup. Users can view free books on the homepage, but must be logged in to access the course page.

## Features

- **User Authentication**: Sign up, log in, and log out functionalities.
- **Free Books**: Access to a selection of free books on the homepage.
- **Course Page**: Restricted access; users must be logged in to view.
- **Responsive Design**: Built using Tailwind CSS for a modern UI.

## Entity-Relationship Diagram (ER Diagram)
The following is a simple description of the entities involved:

User: Represents the users of the application.
userId (Primary Key)
name
email (Unique)
password
Book: Represents the books available in the application.
bookId (Primary Key)
title
author
description
isFree (Boolean)

+--------+          +--------+
|  User  |          |  Book  |
+--------+          +--------+
| userId |<-----+   | bookId |
| name   |      |   | title  |
| email  |      |   | author  |
| password|     |   | description|
+--------+      |   | isFree  |
                +---+--------+
## Installation
git clone https://github.com/yourusername/book-management-store.git

Usage
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



