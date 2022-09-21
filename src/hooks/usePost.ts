import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostWithoutID } from "../components/PostForm";

export function usePost() {
  const { id } = useParams();
  const [post, setPost] = useState<PostWithoutID | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);

  return { post, id, setPost };
}
