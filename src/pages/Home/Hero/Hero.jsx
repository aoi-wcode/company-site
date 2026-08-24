import "./Hero.css";
import Button from "../../../components/Button/Button.jsx";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">

                <p className="hero-label">
                    WEB DESIGN / FRONTEND
                </p>

                <h1>
                    AOI STUDIO
                </h1>

                <p className="hero-title">
                    Webサイトを、<br />
                    もっと使いやすく。
                </p>

                <p className="hero-description">
                    Web制作・フロントエンド開発を通して、<br />
                    見やすく、使いやすいWebサイトを制作します。
                </p>

                <div className="hero-button">
                    <Button
                        text="機能を体験する"
                        type="primary-btn"
                        onClick={() => {
                            document
                                .getElementById("features")
                                .scrollIntoView({ behavior: "smooth" });
                        }}
                    />

                    <Button
                        text="制作実績を見る"
                        type="secondary-btn"
                        onClick={() => {
                            document
                                .getElementById("works")
                                .scrollIntoView({ behavior: "smooth" });
                        }}
                    />
                </div>

            </div>
        </section>
    );
}