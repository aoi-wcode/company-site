import "./Hero.css";
import heroImage from "../../assets/hero.jpg";
import Button from "../../components/Button/Button";

export default function Hero() {
    return (<section className="hero">
        <div className="hero-content">
            <h1> あなたの未来をデザインする </h1>

            <p>Reactで高品質なWebサイトを制作</p>

            <div className="hero-button">
                <Button
                    text="お問い合わせ"
                    type="primary-btn"
                />
                <Button
                    text="製作実績をみる"
                    type="secondary-btn"
                />
            </div>
        </div>

        <div className="hero-image">
            <img src={heroImage} alt="Web制作" />
        </div>

    </section>)
}

