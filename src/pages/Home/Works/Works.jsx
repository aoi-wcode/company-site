import "./Works.css";
import work1 from "../../../assets/Works/work1.jpg";

export default function Works() {
    return (
        <section className="works" id="works">
            <div className="section-heading">
                <p className="section-label">04 / WORKS</p>

                <h2>WORKS</h2>

                <p>
                    これまでに制作したWebサイトやUIをご紹介します。
                </p>
            </div>

            <div className="works-grid">

                <div className="work-card">
                    <div className="work-image">
                        <img
                            src={work1}
                            alt="企業サイト"
                        />
                    </div>

                    <div className="work-info">
                        <span className="work-category">WEB SITE</span>
                        <h3>企業サイト</h3>
                        <p>Reactで制作したコーポレートサイト</p>
                    </div>
                </div>

                <div className="work-card">
                    <div className="work-image"></div>

                    <div className="work-info">
                        <span className="work-category">LANDING PAGE</span>
                        <h3>LP制作</h3>
                        <p>商品紹介ランディングページ</p>
                    </div>
                </div>

                <div className="work-card">
                    <div className="work-image"></div>

                    <div className="work-info">
                        <span className="work-category">PORTFOLIO</span>
                        <h3>ポートフォリオ</h3>
                        <p>自己紹介サイト</p>
                    </div>
                </div>

                <div className="work-card">
                    <div className="work-image"></div>

                    <div className="work-info">
                        <span className="work-category">EC SITE</span>
                        <h3>ECサイト</h3>
                        <p>ショッピングサイトUI</p>
                    </div>
                </div>

            </div>
        </section>
    );
}