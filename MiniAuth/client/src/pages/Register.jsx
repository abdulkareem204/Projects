import { useState } from "react";
import { ENV } from "../config/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    try {
      const res = await axios.post(
        ENV.REGISTER_API_URL,
        { username, password }
      );

      setSuccess(res.data.message);

      setTimeout(() => {
        navigate("/login"); // go to login after register
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");

      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <>
      {/* Toasts */}
      {success && (
        <div className="fixed top-20 right-5 z-50
                        bg-green-500 text-white
                        px-4 py-2 rounded-md
                        shadow-lg">
          {success}
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

      {/* Register card */}
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 rounded-2xl
                        bg-white/5 backdrop-blur-xl
                        border border-white/10 shadow-2xl">

          <h2 className="text-3xl font-bold text-center mb-8
                         bg-linear-to-r from-green-400 to-emerald-500
                         bg-clip-text text-transparent">
            Register
          </h2>

          <div className="flex flex-col gap-4">
            <input
              className="w-full px-4 py-3 rounded-lg
                         bg-white/10 text-white
                         border border-white/10
                         placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
            />

            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg
                         bg-white/10 text-white
                         border border-white/10
                         placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />

            <button
              onClick={handleRegister}
              className="mt-4 w-full py-3 rounded-lg
                         bg-linear-to-r from-green-500 to-emerald-600
                         hover:from-green-600 hover:to-emerald-700
                         text-white font-semibold
                         transition-all duration-200 shadow-lg"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
