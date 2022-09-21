import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Blog } from "./routes/Blog";
import { CreatePost } from "./routes/CreatePost";
import { Post } from "./routes/Post";
import { UpdatePost } from "./routes/UpdatePost";

export interface Post {
  id: number;
  title: string;
  content: string;
}

function App() {
  return (
    <>
      <Header />
      <main className="p-10">
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/:id/edit" element={<UpdatePost />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
