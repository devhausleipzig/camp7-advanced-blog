import { Post } from "../App";

export type PostWithoutID = Omit<Post, "id">;

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  post: PostWithoutID;
  buttonText: string;
  updateField: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof PostWithoutID
  ) => void;
}

export function PostForm({ onSubmit, post, updateField, buttonText }: Props) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-4xl mx-auto">
      <input
        type="text"
        value={post.title}
        placeholder="Title"
        onChange={(event) => updateField(event, "title")}
      />
      <textarea
        rows={26}
        placeholder="Your content goes here..."
        value={post.content}
        onChange={(event) => updateField(event, "content")}
      ></textarea>
      <button className="bg-slate-700 text-slate-50 p-2" type="submit">
        {buttonText}
      </button>
    </form>
  );
}
