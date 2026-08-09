import "./Card.css";

export default function Card({ title, text, className }) {
    return (
        <div className={className}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}