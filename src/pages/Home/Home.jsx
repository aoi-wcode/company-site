import Hero from "./Hero/Hero.jsx";
import Services from "./Services/Services.jsx";
import Features from "./Features/Features.jsx";
import Works from "./Works/Works.jsx";
import ContactSection from "./ContactSection/ContactSection.jsx";
import About from "./About/About.jsx";

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Features />
            <Works />
            <About />
            <ContactSection />
        </>
    );
}

export default Home;