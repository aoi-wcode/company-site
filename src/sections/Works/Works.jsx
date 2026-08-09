import "./Works.css"
import work1 from "../../assets/works/work1.jpg";

export default function Works() {
    return (
        <section className="works">
            <h2>Works</h2>

            <div className="works-grid">
                <div className="work-card">
                    <div className="work-image">
                        <img src={work1} alt="企業サイト" className="work-image" />
                    </div>
                    <h3>企業サイト</h3>
                    <p>Reactで制作したコーポレートサイト</p>
                </div>

                <div className="work-card">
                    <div className="work-image"></div>
                    <h3>LP制作</h3>
                    <p>商品紹介ランディングページ</p>
                </div>

                <div className="work-card">
                    <div className="work-image"></div>
                    <h3>ポートフォリオ</h3>
                    <p>自己紹介サイト</p>
                </div>

                <div className="work-card">
                    <div className="work-image"></div>
                    <h3>ECサイト</h3>
                    <p>ショッピングサイトUI</p>
                </div>
            </div>
        </section>
    )
}