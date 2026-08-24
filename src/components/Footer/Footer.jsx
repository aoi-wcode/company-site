import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div>
                    <p className="footer-label">AOI STUDIO</p>

                    <h2>
                        Webサイトを、
                        <br />
                        もっと使いやすく。
                    </h2>
                </div>

                <nav className="footer-menu">
                    <Link to="/">Home</Link>

                    <a href="/#works">Works</a>

                    <Link to="/contact">Contact</Link>
                </nav>
            </div>

            <div className="footer-bottom">
                <p className="footer-copy">
                    © 2026 AOI STUDIO
                </p>

                <div className="footer-icons">
                    <a href="#" aria-label="GitHub">
                        <FaGithub />
                    </a>

                    <a href="#" aria-label="Instagram">
                        <FaInstagram />
                    </a>

                    <a href="#" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
}