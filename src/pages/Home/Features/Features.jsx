import "./Features.css";
import Accordion from "../../../components/Accordion/Accordion.jsx";
import Modal from "../../../components/Modal/Modal.jsx";
import Filter from "../../../components/Filter/Filter.jsx";
import Posts from "../../Posts.jsx";

export default function Features() {
    return (
        <section className="features" id="features">

            <div className="section-heading">
                <p className="section-label">03 / FEATURES</p>

                <h2>FEATURES</h2>

                <p>
                    見た目だけでなく、実際に触ったときの使いやすさまで考えた
                    Webサイトを制作します。
                </p>
            </div>

            <div className="features-list">

                <div className="feature-item">
                    <div className="feature-title">
                        <span className="feature-number">01</span>

                        <div>
                            <span className="feature-en">ACCORDION</span>
                            <h3>情報を必要なときだけ表示</h3>
                        </div>
                    </div>

                    <div className="feature-detail">
                        <p>
                            情報量が多いページでも、
                            必要な項目だけ開いて確認できます。
                        </p>

                        <Accordion />
                    </div>
                </div>


                <div className="feature-item">
                    <div className="feature-title">
                        <span className="feature-number">02</span>

                        <div>
                            <span className="feature-en">MODAL</span>
                            <h3>ページを移動せずに詳しく見る</h3>
                        </div>
                    </div>

                    <div className="feature-detail">
                        <p>
                            詳細情報をその場で確認できるので、
                            ページ移動の手間を減らせます。
                        </p>

                        <Modal />
                    </div>
                </div>


                <div className="feature-item">
                    <div className="feature-title">
                        <span className="feature-number">03</span>

                        <div>
                            <span className="feature-en">FILTER</span>
                            <h3>必要な情報だけを探す</h3>
                        </div>
                    </div>

                    <div className="feature-detail">
                        <p>
                            カテゴリーで絞り込んで、
                            目的の情報を見つけやすくできます。
                        </p>

                        <Filter />
                    </div>
                </div>


                <div className="feature-item">
                    <div className="feature-title">
                        <span className="feature-number">04</span>

                        <div>
                            <span className="feature-en">API</span>
                            <h3>最新情報を自動で表示</h3>
                        </div>
                    </div>

                    <div className="feature-detail">
                        <p>
                            外部のデータを取得して、
                            最新の情報を自動で表示できます。
                        </p>

                        <Posts />
                    </div>
                </div>

            </div>

        </section>
    );
}