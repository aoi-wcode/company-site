import "./Services.css";
import { FaLaptopCode, FaReact, FaMobileAlt } from "react-icons/fa";

export default function Services() {
    return (
        <section className="services">
            <h2>Services</h2>

            <div className="services-grid">

                <div className="service-card">
                    <h3>
                        <FaLaptopCode />
                        web制作
                    </h3>
                    <p>企業サイト・LP・ポートフォリオを制作します。</p>
                </div>

                <div className="service-card">
                    <h3>
                        <FaReact />
                        React開発
                    </h3>
                    <p>Reactを使って保守しやすいサイトを制作します。</p>
                </div>

                <div className="service-card">
                    <h3>
                        <FaMobileAlt/>
                        レスポンシブ対応
                    </h3>
                    <p>PC・スマホ・タブレットすべてに対応します。</p>
                </div>

            </div>
        </section>
    );
}