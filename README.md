# Agriculture Website

This is a web application for managing blog posts related to agriculture. The application is built using React, Vite, Firebase, and Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Blog Management**: Create, edit, and delete blog posts.
- **User Authentication**: Admin login for managing blog posts.
- **Responsive Design**: Fully responsive design using Tailwind CSS.
- **Firebase Integration**: Firebase Firestore for data storage and Firebase Storage for image uploads.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)
- [Firebase Account](https://firebase.google.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/agriculture-website.git
    cd agriculture-website
    ```

2. Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Configuration

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Create a `.env` file in the root directory and add your Firebase configuration:
    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

3. Initialize Firebase in your project. Update the `firebase.js` file in the `src` directory with your Firebase config.

### Usage

To run the application locally:
```sh
npm run dev
# or
yarn dev
