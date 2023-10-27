import React from "react";
import PostList from "./PostList";
import { Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
};

export default Posts;
