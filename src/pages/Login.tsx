import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginContent from "../components/LoginContent";

function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <LoginContent />
      </div>
      <Footer />
    </div>
  );
}

export default Login;