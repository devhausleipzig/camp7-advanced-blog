import { useState } from "react";

interface Props {
  postId: number;
}

const initialComment = {
  name: "",
  message: "",
};

export function CreateComment({ postId }: Props) {
  const [comment, setComment] = useState(initialComment);

  async function handleSubmit() {
    try {
      const response = await fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...comment, postId, createdAt: new Date() }),
      });
      if (!response.ok) throw new Error();
      alert("Comment sent");
      setComment(initialComment);
    } catch (err) {
      alert("Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-between gap-2">
      <input
        value={comment.name}
        onChange={(event) =>
          setComment({ ...comment, name: event.target.value })
        }
        type="text"
        maxLength={16}
        placeholder="Your name"
      />
      <input
        value={comment.message}
        onChange={(event) =>
          setComment({ ...comment, message: event.target.value })
        }
        type="text"
        maxLength={60}
        className="flex-1"
        placeholder="Message..."
      />
      <button className="bg-slate-700 p-2 text-slate-50" type="submit">
        Send comment
      </button>
    </form>
  );
}
