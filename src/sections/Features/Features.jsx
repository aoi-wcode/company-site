import "./Features.css";
import Card from "../../components/Card/Card";

export default function Features() {

    const features = [
        {
            title: "高品質なデザイン",
            text: "見やすく使いやすいWebサイトを制作します。",
            className: "feature-card",
        },
        {
            title: "レスポンシブ対応",
            text: "PC・タブレット・スマホすべてに対応します。",
            className: "feature-card",
        },
        {
            title: "React開発",
            text: "保守しやすいコンポーネント設計で制作します。",
            className: "feature-card",
        },
    ];

    return (
        <section className="features">
            <h2>選ばれる理由</h2>

            <div className="features-grid">
                {features.map((feature) => (
                    <Card
                        key={feature.title}
                        title={feature.title}
                        text={feature.text}
                        className={feature.className}
                    />
                ))}
            </div>

        </section>
    );
}