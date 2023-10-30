# Real-Time Project Management Application with React and Firebase


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)

## Introduction

This is a real-time **Project Management single page** web application built using React and Firebase. It allows users to create, update, and manage projects and tasks in real-time, making it an ideal solution for team collaboration and task management. The application has all the essential features like user authentication, forgot password feature, log protected pages with all the details of the user being stored in firebase, filtering feature etc. The application leverages **Firebase Firestore**, a cloud-based NoSQL database, to store and retrieve projects and tasks, providing a seamless experience for multiple users. The application also has a realtime comment feature using which the users can chat and respond in realtime. 
This application includes additional features such as todo list, project expense tracker, random quote generator and Virtual assisstant chatbot for enhancing the user experience.

With real-time synchronization, any changes to projects or tasks are instantly reflected on the screens of all connected users. This project management application helps teams stay organized and productive by providing a central platform for tracking and collaborating on projects and tasks.

## Features

- **Real-Time Updates**: All changes to projects and tasks are instantly synchronized across all connected devices.
- **Create Projects**: Add new projects to the list, providing a title and description.
- **Update Projects**: Edit and update project titles and descriptions.
- **Assign Projects**: Assign projects to different team members.
- **Real Time comments**: Post comments and chats in realtime.
- **Complete Projects**: Mark projects as completed.
- **Filter Projects**: Filter projects on the basis of ownership or project category.
- **Todo List**: Create a todo list for yourself.
- **Add Todos**: Add new todos in the todo list.
- **Edit Todos**: Update todos.
- **Delete Todos**: Delete todos from the todo list.
- **Get some motivation page**: A page with a random quote generator to motivate the users.
- **Virtual assisstant Chatbot**: A virtual assisstant chatbot for answering queries.

## Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Firebase](https://firebase.google.com/): A comprehensive mobile and web application development platform.
- [Firestore](https://firebase.google.com/products/firestore): Firebase's NoSQL cloud database for building web, mobile, and server applications.
- [Firebase Cloud Storage](firebase.google.com/products/storage) : Object Storage service for storing photos and videos.

## Getting Started

To get started with this project, follow the steps below:

1. Clone this repository to your local machine using `git clone`.

2. Create a Firebase project and set up Firebase Firestore. You can follow Firebase's documentation to do this.

3. Copy your Firebase configuration (apiKey, authDomain, projectId, etc.) and replace the placeholders in the `src/firebase/config.js` file.

4. Install project dependencies using `npm install` or `yarn install`.

5. Start the development server with `npm start` or `yarn start`.

6. The application will be accessible in your web browser at `http://localhost:3000`.

## How to Use

1. Signup for the application and see your details being stored in the authentication details and firestore database.
2. Create a new project by providing a title,description,due date, project category and the users to whom the project is to be assigned.
3. Navigate to the dashboard to see the project card.
4. Click on the card to view all the details of the project.
5. Remove projects and all the related details by clicking on the mark as complete button. (The project can only be deleted by the user who created it)
6. Use the real time comment feature and see your comments being stored in firebase firestore database
7. Navigate to the todo list page and try creating, updating and deleting todos.
8. Navigate to the get some motivation page to see the randmly generated quotes.
9. Share the quotes on twitter by clicking on the twitter icon present below the page.
10. Try using the Virtual assisstant chotbot feature by clicking on the Virtual assisstant icon present in the right most corner of the screen at the bottom.
11. Collaborate with team members, and enjoy real-time synchronization of all updates.
