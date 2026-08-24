import "./ContactSection.css";
import { Link } from "react-router-dom";

export default function ContactSection() {
    return (
        <section className="contact-section">
            <div className="contact-heading">
                <p className="section-label">06 / CONTACT</p>

                <h2>CONTACT</h2>

                <p>
                    Webサイトの制作やリニューアル、
                    UIの改善など、お気軽にご相談ください。
                </p>
            </div>

            <Link to="/contact" className="contact-link">
                <span>お問い合わせ</span>
                <span className="contact-arrow">→</span>
            </Link>
        </section>
    );
}