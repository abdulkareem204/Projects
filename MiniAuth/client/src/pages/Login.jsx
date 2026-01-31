import { useState } from "react";
import { ENV } from "../config/api.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    setAlert("");

    try {
      const res = await axios.post(
        ENV.LOGIN_API_URL,
        { username, password },
        { withCredentials: true }
      );

      setAlert(res.data.message);

      setTimeout(() => {
        navigate("/");
      }, 1500); // ✅ show success first
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");

      setTimeout(() => setError(""), 3000); // auto hide
    }
  };

  return (
    <>
      {/* Notifications */}
      {alert && (
        <div className="fixed top-20 right-5 z-50
                        bg-green-500 text-white
                        px-4 py-2 rounded-md
                        shadow-lg">
          {alert}
        </div>
      )}

      {error && (
        <div className="fixed top-20 right-5 z-50
                        bg-red-600 text-white
                        px-4 py-2 rounded-md
                        shadow-lg">
          {error}
        </div>
      )}

      {/* Login card */}
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 rounded-2xl
                        bg-white/5 backdrop-blur-xl
                        border border-white/10 shadow-2xl">

          <h2 className="text-3xl font-bold text-center mb-8
                         bg-linear-to-r from-cyan-400 to-purple-400
                         bg-clip-text text-transparent">
            Login
          </h2>

          <div className="flex flex-col gap-4">
            <input
              className="w-full px-4 py-3 rounded-lg
                         bg-white/10 text-white
                         border border-white/10
                         placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
            />

            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg
                         bg-white/10 text-white
                         border border-white/10
                         placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="mt-4 w-full py-3 rounded-lg
                         bg-linear-to-r from-cyan-500 to-blue-600
                         hover:from-cyan-600 hover:to-blue-700
                         text-white font-semibold
                         transition-all duration-200 shadow-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
