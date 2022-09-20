import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../App";

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {posts.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <div
            className="shadow-md p-4 flex flex-col gap-4 hover:shadow-lg transition duration-300"
            key={post.id}
          >
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p className="line-clamp-3">{post.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
