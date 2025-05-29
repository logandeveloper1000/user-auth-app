# React + Firebase User Authentication

## Live Demo
https://user-authentication-app.netlify.app

## Description

This project is a modern, responsive user authentication system built with React and Firebase. It includes:

- Email and password registration and login
- Google Sign-In with Firebase OAuth
- Slide-down modals for success and error feedback
- Protected dashboard route after login
- Delete account feature with confirmation modal
- Clean UI styled with custom CSS
- Deployed live on Netlify

## Tech Stack

- React
- Firebase Authentication
- React Router
- JavaScript (ES6)
- CSS3 (custom styling)
- Netlify (hosting)

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:

```bash
npm install
```

3. Add your Firebase configuration to `firebase.js`:

```js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  // ...
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
```

4. Start the development server:

```bash
npm start
```

## Deployment

This project is deployed using Netlify. Make sure to add your Netlify domain under Authorized Domains in the Firebase Console.

## Author

Gabriel Logan
