# MiniAuth 🔐

MiniAuth is a mini full-stack project that demonstrates **user registration, login, and logout** using a React frontend and an Express backend.  
It is my first React project connected to a real backend, built with **MongoDB** and classic authentication tools.

This project focuses on learning the fundamentals the right way — clean structure, clear flow, and simple logic.

---

## 📌 Features

- User registration  
- User login  
- User logout  
- Password hashing with **bcrypt**  
- Backend API with **Express**  
- MongoDB database connection using **Mongoose**  
- Environment variables with **dotenv**  
- CORS handling between client and server  
- Frontend–backend integration using **Axios**

---

## 🧱 Tech Stack

### Frontend (Client)
- React (Vite)
- JavaScript
- Axios
- Tailwind CSS
- dotenv (for environment variables)

### Backend (Server)
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- cors
- dotenv

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB running locally or on a cloud service (e.g., MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```
   git clone https://github.com/abdulkareem204/Projects.git
   cd MiniAuth

## 🗂️ Project Structure (Clean & Tracked)
```
MiniAuth/
│
├── client/                         # Frontend (React + Vite)
│   ├── public/
│   │   └── favicon.png
│   │
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── config/
│   │   │   └── api.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── eslint.config.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                         # Backend (Node.js + Express)
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   └── auth.js
│   │
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md

```
## 🚫 Ignored Files

### To keep the repository clean, the following are ignored:

- `node_modules/`
- `.env` files
- `dist/` and `build/` folders
- Logs, cache, editor settings
- Vite internal files
- (See `.gitignore` for full list)

## Clone the repo
```
    git clone <your-repo-url>
    cd MiniAuth
```
## Start Backend
```
    cd server
    npm install
    npm run dev
```
## Create `server/.env `:

``` 
    PORT=3000
    MONGO_URI= your_mongodb_connection_string

    SESSION_SECRET= your_session_secret_key

    CORS_ORIGIN = your_frontend_url

```
## Start Frontend

``` 
    cd client
    npm install
    npm run dev


```
## Create `client/.env `:

``` 
    VITE_LOGIN_API =  your_api_url
    VITE_REGISTER_API =  your_api_url
    VITE_FETCH_API = your_api_url
    VITE_LOGOUT_FETCH_API =  your_api_url

```

## 🧠 Learning Outcome

- This project helped me understand:
- How frontend and backend talk to each other
- How authentication works step by step
- How to structure a real project
- How to use environment variables securely
- How to connect React with Express + MongoDB

## 🚀 Next Improvements (Planned)

- Protected routes
- Session or JWT based auth
- Better UI
- Error handling
- Production deployment

## Final Note
     This is a learning project, built with care and clarity. 
     Simple, honest, and structured — a small step forward,
     built on solid ground.



