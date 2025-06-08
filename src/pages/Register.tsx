import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegisterContent from "../components/RegisterContent";

import "../App.css";

function Register() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <RegisterContent />
            <Footer />
        </>
    );
}

export default Register;