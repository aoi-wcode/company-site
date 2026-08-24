import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getNotices = async () => {
            const { data, error } = await supabase
                .from("notices")
                .select("*")
                .order("date", { ascending: false });

            if (error) {
                console.error(error);
                return;
            }

            setPosts(data);
        };

        getNotices();
    }, []);

    return (
        <section className="api-demo">
            <h2>最新情報</h2>

            <p>
                外部のデータを取得して、最新の情報を自動で表示できます。
            </p>

            <div>
                {posts.map((post) => (
                    <article key={post.id}>
                        <p>{post.date}</p>

                        <h3>{post.title}</h3>

                        <p>{post.category}</p>

                        <p>{post.content}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Posts;