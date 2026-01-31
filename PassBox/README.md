# PassBox 🔐

PassBox is a simple **password manager web app** that lets you store and manage passwords directly in your browser using **localStorage**.  
This project was built to strengthen my understanding of front-end development, browser storage, and CRUD logic.

---

## 🚀 Demo

PassBox runs entirely in the browser — no backend.  
All passwords are stored in **localStorage**, so data remains between sessions unless cleared manually.

---

## 📌 Features

- Add new passwords with title and associated details  
- Store passwords securely in `localStorage`  
- View all saved passwords  
- Delete unwanted entries  
- Simple, responsive UI
- Built with vanilla JavaScript / React (depending on your implementation)

---

## 📁 Project Structure

``` 
PassBox/
├── public/
│ └── favicon.png
├── src/
│ ├── components/ # UI components
│ ├── App.jsx # Main app component
│ ├── index.css # Global styles
│ └── main.jsx # App entry
├── .gitignore
├── README.md
└── package.json
```


---

## 🛠️ Built With

- **React** (or JavaScript if not using React)
- **localStorage** for persistent browser storage
- HTML5 & CSS3
- Optional: Tailwind / Bootstrap / Custom styling

---

## 📦 Installation

Clone the repo:

```bash
git clone https://github.com/abdulkareem204/Projects.git

```

## 🧠 How It Works

- PassBox uses the browser’s localStorage API:

- On page load, existing passwords are read from localStorage

- When a user adds a password, it gets saved into the array and written back to localStorage

- When deleting, the corresponding entry is removed from localStorage

- This keeps the app frontend-only and lightweight.
