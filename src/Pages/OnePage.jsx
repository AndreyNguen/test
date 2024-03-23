import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Button from "../UI/Button/Button";

export default function OnePage() {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(0);

  useEffect(() => {
    fetchOnePost(params.id);
  }, []);

  async function fetchOnePost(id) {
    const responce = await PostService.getById(id);
    setPost(responce.data);
  }

  console.log("POSTS", post);
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post_btn">
        <Button onClick={() => navigate(`/`)}>Назад</Button>
      </div>
    </div>
  );
}
