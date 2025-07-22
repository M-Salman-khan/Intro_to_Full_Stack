# React Login & Dashboard App

This is a simple React app that includes a login page and a protected dashboard page using **React Router**.

## 📁 Project Structure

```
my-app/
├── public
├── src/
│   ├── components/
│   │   └── Login.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── package.json
└── README.md
```

## 🚀 Features

- User authentication using hardcoded credentials (or from JSON file via backend)
- Navigation between login and dashboard
- Redirection based on login status
- Simple UI with optional Tailwind CSS styling

## 🧑‍💻 Tech Stack

- React
- React Router DOM (`react-router-dom`)
- Fetch API for backend login
- Node.js + Express backend (optional)
- JSON for storing user credentials

## 🛠️ Installation

```bash
git clone https://github.com/M-Salman-khan/Intro_to_Full_Stack.git
cd Intro_to_Full_Stack
npm install
npm start
```

Make sure your **backend server** (Node.js) is running on `http://localhost:5000`.

## 🛣️ Routes

| Route       | Component     | Access            |
|-------------|----------------|-------------------|
| `/`         | Login          | Public            |
| `/dashboard`| Dashboard      | Protected (after login) |

## 🔐 Sample Credentials

```
Username: salman123
Password: pass123
```

## 📝 Notes

- Make sure to install `react-router-dom`:

```bash
npm install react-router-dom
```

- This project assumes you are using a backend for login validation. The frontend sends a POST request to `/login`.

---
📅 Generated on: July 22, 2025
