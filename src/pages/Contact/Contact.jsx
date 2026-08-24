import { useState } from "react";
import "./Contact.css";
import { supabase } from "../../supabaseClient";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "お名前を入力してください。";
        }

        if (!email.trim()) {
            newErrors.email = "メールアドレスを入力してください。";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "正しいメールアドレスを入力してください。";
        }

        if (!message.trim()) {
            newErrors.message = "お問い合わせ内容を入力してください。";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setSubmitted(false);
            return;
        }

        setIsSubmitting(true);
        setSubmitted(false);
        setSubmitError("");

        const { error } = await supabase
            .from("contacts")
            .insert([
                {
                    name,
                    email,
                    message,
                },
            ]);

        setIsSubmitting(false);

        if (error) {
            console.error(error);
            setSubmitError(
                "送信に失敗しました。時間をおいてもう一度お試しください。"
            );
            return;
        }

        setSubmitted(true);

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <main className="contact-page">
            <div className="contact-heading">
                <p className="section-label">06 / CONTACT</p>

                <h1>CONTACT</h1>

                <p>
                    Webサイトの制作やリニューアル、
                    UIの改善など、お気軽にご相談ください。
                </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">NAME</label>

                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="お名前を入力してください"
                    />

                    {errors.name && (
                        <p className="form-error">{errors.name}</p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email">EMAIL</label>

                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@gmail.com"
                    />

                    {errors.email && (
                        <p className="form-error">{errors.email}</p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="message">MESSAGE</label>

                    <textarea
                        id="message"
                        rows="6"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="お問い合わせ内容を入力してください"
                    />

                    {errors.message && (
                        <p className="form-error">{errors.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="contact-submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "送信中..." : "送信する →"}
                </button>

                {submitError && (
                    <p className="form-submit-error">
                        {submitError}
                    </p>
                )}

                {submitted && (
                    <p className="form-success">
                        お問い合わせありがとうございます。
                    </p>
                )}
            </form>
        </main>
    );
}