import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">

            <h2>Aoi Portfolio</h2>

            <ul className="footer-menu">
                <li>Home</li>
                <li>Features</li>
                <li>Services</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>

            <div className="footer-icons">
                <FaGithub />
                <FaInstagram />
                <FaLinkedin />
            </div>

            <p>© 2026 Aoi Portfolio. All Rights Reserved.</p>

        </footer>
    );
}