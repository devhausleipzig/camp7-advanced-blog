import { ChangeEvent } from "react";
import { Post } from "./App";
import { PostWithoutID } from "./components/PostForm";

export function titleToSlug(title: string) {
  return title.toLowerCase().split(" ").join("-");
}
