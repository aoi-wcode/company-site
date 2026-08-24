import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <main className="not-found">
            <p className="section-label">404 / NOT FOUND</p>

            <h1>404</h1>

            <p>
                お探しのページは見つかりませんでした。
            </p>

            <Link to="/" className="not-found-link">
                <span>HOMEに戻る</span>
                <span className="not-found-arrow">→</span>
            </Link>
        </main>
    );
}