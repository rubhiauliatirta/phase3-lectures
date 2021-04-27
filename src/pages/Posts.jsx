import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function Posts() {
  const { loading, error, data: posts } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <h1>Loading.....</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h1>Post List</h1>
      {/* <h1>{JSON.stringify(posts)}</h1> */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
