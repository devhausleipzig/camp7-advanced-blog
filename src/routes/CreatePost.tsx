import { ChangeEvent, FormEvent, useState } from "react";
import { Post } from "../App";
import { PostForm } from "../components/PostForm";

const initialPost = {
  title: "",
  content: "",
};

export function CreatePost() {
  const [post, setPost] = useState(initialPost);

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Post
  ) {
    setPost({ ...post, [field]: event.target.value });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(post),
      });
      if (!response.ok) throw new Error();
      alert("Your blog post got created");
      setPost(initialPost);
    } catch (err) {
      alert("something went wrong");
    }
  }

  return (
    <div>
      <PostForm
        onSubmit={handleSubmit}
        post={post}
        updateField={updateField}
        buttonText="Create Post"
      />
      {/* <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-4xl mx-auto"
      >
        <input
          type="text"
          value={post.title}
          placeholder="Title"
          onChange={(event) => setPost({ ...post, title: event.target.value })}
        />
        <textarea
          rows={26}
          placeholder="Your content goes here..."
          value={post.content}
          onChange={(event) =>
            setPost({ ...post, content: event.target.value })
          }
        ></textarea>
        <button className="bg-slate-700 text-slate-50 p-2" type="submit">
          Create Post
        </button>
      </form> */}
    </div>
  );
}
