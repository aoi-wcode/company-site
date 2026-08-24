import { useState } from "react";

function Filter() {
    const [category, setCategory] = useState("All");

    const works = [
        {
            title: "Corporate Site",
            category: "Web制作",
        },
        {
            title: "Landing Page",
            category: "LP",
        },
        {
            title: "EC Site",
            category: "EC",
        },
        {
            title: "Restaurant Site",
            category: "Web制作",
        },
    ];

    const filteredWorks =
        category === "All"
            ? works
            : works.filter((work) => work.category === category);

    return (
        <div>
            <div className="filter-buttons">
                <button
                    className={category === "All" ? "active" : ""}
                    onClick={() => setCategory("All")}
                >
                    すべて
                </button>

                <button
                    className={category === "Web制作" ? "active" : ""}
                    onClick={() => setCategory("Web制作")}
                >
                    Web制作
                </button>

                <button
                    className={category === "LP" ? "active" : ""}
                    onClick={() => setCategory("LP")}
                >
                    LP
                </button>

                <button
                    className={category === "EC" ? "active" : ""}
                    onClick={() => setCategory("EC")}
                >
                    EC
                </button>
            </div>

            <div className="filter-results">
                {filteredWorks.map((work) => (
                    <div key={work.title} className="filter-result">
                        <h3>{work.title}</h3>
                        <p>{work.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Filter;