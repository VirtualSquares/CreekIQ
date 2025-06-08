import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

import "../App.css";

function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Footer />
        </>
    );
}

export default Home;