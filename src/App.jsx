import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Posts from "./pages/Posts";
import Navigation from "./components/Navigation/Navigation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;