import "./About.css";

export default function About() {
    return (
        <section className="about" id="about">
            <div className="section-heading">
                <p className="section-label">05 / ABOUT</p>
                <h2>ABOUT</h2>
            </div>

            <div className="about-content">
                <div className="about-name">
                    <span>NAME</span>
                    <h3>Aoi ○○</h3>
                </div>

                <div className="about-info">
                    <div>
                        <span>ROLE</span>
                        <p>Web Designer / Frontend Developer</p>
                    </div>

                    <div>
                        <span>SKILLS</span>
                        <p>HTML / CSS / JavaScript / React</p>
                    </div>

                    <div>
                        <span>PROFILE</span>
                        <p>
                            Webサイト制作を中心に、
                            見やすく、使いやすいWebサイトを制作しています。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}