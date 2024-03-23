import React from "react";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

export default function PostItem(props) {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btn">
        <Button onClick={() => props.remove(props.post)}>Удалить</Button>
      </div>
      <div className="post_btn">
        <Button onClick={() => navigate(`/posts/${props.post.id}`)}>
          Смотреть
        </Button>
      </div>
    </div>
  );
}
