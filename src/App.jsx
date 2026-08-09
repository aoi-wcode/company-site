import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import Services from "./sections/Services/Services.jsx";
import Works from "./sections/Works/Works.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import Footer from "./sections/footer/Footer.jsx";
import Button from "./components/Button/Button.jsx";
function App() {
  return (
      <>
          <Navbar />
          <Hero />
          <Features />
          <Services />
          <Works />
          <Contact />
          <Footer />
          <Button />


      </>
  );
}

export default App;