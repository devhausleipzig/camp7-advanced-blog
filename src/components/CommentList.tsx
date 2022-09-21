import { useEffect, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";

interface Comment {
  id: number;
  postId: number;
  name: string;
  message: string;
  createdAt: string;
}

interface Props {
  postId: number;
}

export function CommentList({ postId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  // fetch(`http://localhost:3000/comments?postId=${postId}`)
  // fetch(`http://localhost:3000/posts/${postId}/comments`)
  useEffect(() => {
    fetch(`http://localhost:3000/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setComments(res);
      });
  }, []);

  return (
    <div className="divide-y-2">
      {comments
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((comment) => (
          <div className="mt-2" key={comment.id}>
            <div className="flex gap-4 items-center">
              <h4 className="font-bold">{comment.name}</h4>
              <span className="text-xs opacity-80">
                {formatDistanceToNow(new Date(comment.createdAt))}
              </span>
            </div>
            <p className="text-sm">{comment.message}</p>
          </div>
        ))}
    </div>
  );
}
