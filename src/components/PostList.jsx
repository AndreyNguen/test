import PostItem from "./PostItem";

export default function PostList({ posts, remove }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Посты</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
}
