import { useState } from "react";
import "./Accordion.css";

function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);
    const questions = [
        {
            question: "Reactって何？",
            answer: "WebサイトのUIを作るためのJavaScriptライブラリです。",
        },
        {
            question: "どんな機能を作れる？",
            answer: "フォーム、モーダル、タブ、検索、API連携などを作れます。",
        },
        {
            question: "スマホにも対応できる？",
            answer: "CSSを使ってスマートフォン向けのレイアウトにも対応できます。",
        },
    ];



    return (
        <div className="accordion">
            {questions.map((item, index) => (
                <div className="accordion-item" key={item.question}>
                    <button
                        className="accordion-button"
                        onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                        }
                    >
                        {item.question}

                        <span>
            {openIndex === index ? "−" : "+"}
          </span>
                    </button>

                    {openIndex === index && (
                        <p className="accordion-answer">
                            {item.answer}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Accordion;