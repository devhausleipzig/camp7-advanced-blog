import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../App";
import { PostForm, PostWithoutID } from "../components/PostForm";
import { usePost } from "../hooks/usePost";

export function UpdatePost() {
  const { post, id, setPost } = usePost();

  async function handleSubmit() {
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(post),
      });
      if (!response.ok) throw new Error();
      alert("Post updated");
    } catch (err) {
      alert("Something went wrong");
    }
  }

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Post
  ) {
    if (!post) return;
    setPost({ ...post, [field]: event.target.value });
  }

  if (!post) return <div>Loading...</div>;

  return (
    <PostForm
      onSubmit={handleSubmit}
      updateField={updateField}
      post={post as PostWithoutID}
      buttonText="Update Post"
    />
  );
}
