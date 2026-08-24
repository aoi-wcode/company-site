import { useState } from "react";
import "./Modal.css";

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="modal-demo">
            <button className="feature-action" onClick={() => setIsOpen(true)}>
                詳しく見る
            </button>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button
                            className="modal-close"
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>

                        <h2>ページを移動せずに情報を表示</h2>

                        <p>
                            Modalを使うと、現在のページを離れずに
                            詳しい情報を表示できます。
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;