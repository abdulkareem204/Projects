import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ENV } from "../config/api";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUsername] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const checkSession = async () => {
    try {
      const res = await fetch(ENV.FETCH_API_URL, {
        credentials: "include",
      });
      const data = await res.json();
      setLoggedIn(data.loggedIn);
      setUsername(data.username);
    } catch (err) {
      console.error("Session check failed", err);
    }
  };

  useEffect(() => {
    checkSession();
    setOpen(false); // close mobile menu on route change
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await axios.post(
        ENV.LOGOUT_FETCH_API_URL,
        {},
        { withCredentials: true }
      );
      setLoggedIn(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <>
      {/*  DESKTOP Navbar */}
      <nav className="hidden md:block sticky top-0 z-40
                      bg-linear-to-r from-slate-950 via-indigo-950 to-purple-950
                      text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

          <Link to="/" className="font-extrabold text-2xl select-none">
            MiniAuth
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/">Home</Link>

            {loggedIn ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">{userName}</span>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-1.5 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link
                  to="/register"
                  className="bg-indigo-800 px-5 py-1.5 rounded-md hover:bg-indigo-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/*  MOBILE Navbar  */}
      <nav className="md:hidden sticky top-0 z-40
                      bg-linear-to-r from-slate-950 via-indigo-950 to-purple-950
                      text-white border-b border-white/10">
        <div className="flex justify-between items-center px-4 py-3">

          <Link to="/" className="font-extrabold text-xl select-none">
            MiniAuth
          </Link>

          <button onClick={() => setOpen(!open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="flex flex-col gap-3 px-4 pb-4">

            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            {loggedIn ? (
              <>
                <span className="text-gray-400 text-sm">{userName}</span>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 w-full py-2 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-center border border-white/10 py-2 rounded-md"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="text-center bg-indigo-800 py-2 rounded-md hover:bg-indigo-700"
                  onClick={() => setOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </>
  );
}
