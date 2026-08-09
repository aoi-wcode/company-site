import "./Contact.css";

export default function Contact() {
    return (
        <section className="contact">
            <h2>Contact</h2>

            <form className="contact-form">

                <label>名前</label>
                <input
                    type="text"
                    placeholder="お名前を入力してください"
                />

                <label>メールアドレス</label>
                <input
                    type="email"
                    placeholder="example@gmail.com"
                />

                <label>お問い合わせ内容</label>
                <textarea
                    rows="6"
                    placeholder="お問い合わせ内容を入力してください"
                ></textarea>

                <button type="submit">
                    送信する
                </button>

            </form>
        </section>
    );
}