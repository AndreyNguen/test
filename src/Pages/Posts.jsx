import React, { useEffect, useState } from "react";
import { getPageCount, getPagesArray } from "../utils/pages";
import PostService from "../API/PostService";
import PostForm from "../components/PostForm";
import Select from "../UI/Select/Select";
import PostList from "../components/PostList";
import Button from "../UI/Button/Button";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  let pagesArray = getPagesArray(totalPages);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  async function fetchPosts() {
    setIsLoading(true);
    const responce = await PostService.getAll(limit, page);
    setPosts(responce.data);
    const totalCount = responce.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
    setIsLoading(false);
  }

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <Select
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
      {isLoading ? (
        <h1 style={{ textAlign: "center" }}>Загрузка постов...</h1>
      ) : (
        <PostList remove={removePost} posts={posts} />
      )}
      {pagesArray.map((page) => (
        <Button onClick={() => changePage(page)} key={page}>
          {page}
        </Button>
      ))}
    </div>
  );
}

export default Posts;
