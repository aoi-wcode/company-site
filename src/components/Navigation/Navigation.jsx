import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    const handleWorksClick = (e) => {
        e.preventDefault();

        if (window.location.pathname !== "/") {
            window.location.href = "/#works";
            return;
        }

        document
            .getElementById("works")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="navigation">
            <Link to="/" className="navigation-logo">
                AOI STUDIO
            </Link>

            <div className="navigation-menu">
                <Link to="/">HOME</Link>

                <a href="#works" onClick={handleWorksClick}>
                    WORKS
                </a>

                <Link to="/contact">CONTACT</Link>
            </div>
        </nav>
    );
}

export default Navigation;