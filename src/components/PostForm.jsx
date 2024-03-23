import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

export default function PostForm({ create }) {
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const post = { ...newPost, id: Date.now() };
    create(post);
    setNewPost({ title: "", body: "" });
  };

  const addNewPostHandler = (e) => {
    setNewPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form>
      <Input
        name="title"
        value={newPost.title}
        onChange={addNewPostHandler}
        type="text"
        placeholder="Название поста"
      />
      <Input
        name="body"
        value={newPost.body}
        onChange={addNewPostHandler}
        type="text"
        placeholder="Описание поста"
      />
      <Button onClick={addNewPost} className="myBtn">
        Добавить пост
      </Button>
    </form>
  );
}
