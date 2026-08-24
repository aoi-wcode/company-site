import "./Services.css";

export default function Services() {
    return (
        <section className="services">
            <div className="section-heading">
                <p className="section-label">02 / SERVICE</p>

                <h2>SERVICE</h2>

                <p>
                    Webサイトの目的や課題に合わせて、
                    デザインから制作まで対応します。
                </p>
            </div>

            <div className="services-list">

                <div className="service-item">
                    <div className="service-title">
                        <span className="service-number">01</span>

                        <div>
                            <span className="service-en">WEB SITE</span>
                            <h3>Webサイト制作</h3>
                        </div>
                    </div>

                    <div className="service-detail">
                        <p>
                            企業サイト・LP・ポートフォリオなど、
                            目的に合わせたWebサイトを制作します。
                        </p>

                        <span className="service-skills">
              HTML / CSS / JavaScript / React
            </span>
                    </div>
                </div>


                <div className="service-item">
                    <div className="service-title">
                        <span className="service-number">02</span>

                        <div>
                            <span className="service-en">RENEWAL</span>
                            <h3>サイトリニューアル</h3>
                        </div>
                    </div>

                    <div className="service-detail">
                        <p>
                            既存サイトのデザインや使いやすさを見直し、
                            より伝わりやすいサイトへ改善します。
                        </p>

                        <span className="service-skills">
              Responsive / UI改善 / Component
            </span>
                    </div>
                </div>


                <div className="service-item">
                    <div className="service-title">
                        <span className="service-number">03</span>

                        <div>
                            <span className="service-en">FRONTEND</span>
                            <h3>フロントエンド開発</h3>
                        </div>
                    </div>

                    <div className="service-detail">
                        <p>
                            動きのあるUIや、外部データと連携した
                            Webサイトを制作します。
                        </p>

                        <span className="service-skills">
              React / API / Supabase
            </span>
                    </div>
                </div>

            </div>
        </section>
    );
}