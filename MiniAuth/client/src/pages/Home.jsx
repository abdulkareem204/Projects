import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ENV } from "../config/api";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch(ENV.FETCH_API_URL, {
          credentials: "include"
        });
        const data = await res.json();
        setLoggedIn(data.loggedIn);
      } catch (err) {
        console.error("Session check failed", err);
      }
    };

    checkSession();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen
                bg-linear-to-br from-slate-950 via-indigo-950 to-purple-950
                text-white text-center w-full px-6">

      <h2 className="text-5xl font-extrabold mb-6 tracking-tight
                     bg-clip-text text-transparent 
                     bg-linear-to-r from-cyan-400 to-purple-400">
        Welcome to MiniAuth
      </h2>

      <p className="text-lg text-gray-300 max-w-xl">
        A simple, secure, session-based authentication system —  
        built the right way, the classic way, the reliable way.
      </p>

      {/* 👇 show only when NOT logged in */}
      {!loggedIn && (
        <div className="mt-10 flex gap-4">
          <Link
            to="/login"
            className="px-6 py-2 rounded-full
                       bg-linear-to-r from-cyan-500 to-blue-600
                       hover:from-cyan-600 hover:to-blue-700
                       transition-all duration-200 shadow-lg"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-6 py-2 rounded-full
                       bg-linear-to-r from-purple-500 to-pink-600
                       hover:from-purple-600 hover:to-pink-700
                       transition-all duration-200 shadow-lg"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
