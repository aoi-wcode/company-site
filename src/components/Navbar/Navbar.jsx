import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <h2>Company</h2>

            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Works</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
}