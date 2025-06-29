import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="w-full px-6 py-4 flex justify-between items-center m-0 sticky top-0 z-50"
      style={{ backgroundColor: '#0E0E0E', borderBottom: '1px solid #2c2c2c' }}
    >
      <Link to="/" className="text-2xl font-bold gradient-custom-text">
        CreekIQ
      </Link>
      <div className="flex gap-4">
        <Link
          to="/register"
          className="text-white bg-green-600 px-5 py-2 rounded-full hover:bg-green-700 transition"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="text-white bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
