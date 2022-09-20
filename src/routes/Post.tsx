import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post as PostType } from "../App";

export function Post() {
  const { id } = useParams();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPost(res);
      });
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </div>
  );
}
