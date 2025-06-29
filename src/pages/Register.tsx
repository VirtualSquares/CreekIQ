import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegisterContent from "../components/RegisterContent";

function Register() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <RegisterContent />
      </div>
      <Footer />
    </div>
  );
}

export default Register;