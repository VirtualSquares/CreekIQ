import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginContent() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        navigate("/dashboard");
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch {
      setMessage("Server error");
    }
  };

  return (
    <div className="w-full max-w-lg bg-[#1f1f24] rounded-2xl shadow-2xl p-10 border border-fuchsia-600/30">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Log In</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="relative">
          <input type="email" id="email" value={formData.email} onChange={handleChange} className="peer w-full px-4 pt-6 pb-2 text-sm bg-[#2a2a31] text-white rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder=" " required />
          <label htmlFor="email" className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-fuchsia-400">Email</label>
        </div>
        <div className="relative">
          <input type="password" id="password" value={formData.password} onChange={handleChange} className="peer w-full px-4 pt-6 pb-2 text-sm bg-[#2a2a31] text-white rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder=" " required />
          <label htmlFor="password" className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-fuchsia-400">Password</label>
        </div>
        <button type="submit" className="w-full py-2 px-4 rounded-md text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-fuchsia-800/40">Log In</button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-white">{message}</p>}
      <p className="text-sm text-gray-400 text-center mt-6">
        Don’t have an account?{" "}
        <a href="#/register" className="text-fuchsia-400 hover:underline">Register</a>
      </p>
    </div>
  );
}

export default LoginContent;