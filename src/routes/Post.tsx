import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Post as PostType } from "../App";
import { CommentList } from "../components/CommentList";
import { CreateComment } from "../components/CreateComment";
import { PencilIcon } from "@heroicons/react/24/solid";
import { usePost } from "../hooks/usePost";

export function Post() {
  const { post, id } = usePost();

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-8">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <Link
          to={`/post/${id}/edit`}
          className="bg-slate-700 text-slate-50 p-3 rounded-md"
        >
          <PencilIcon className="h-6 w-6" />
        </Link>
      </div>
      <div className="h-px bg-slate-700/20" />
      <p className="text-lg">{post.content}</p>
      <CreateComment postId={parseInt(id!)} />
      <CommentList postId={parseInt(id!)} />
    </div>
  );
}
