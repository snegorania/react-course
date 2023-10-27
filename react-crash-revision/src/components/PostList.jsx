import Post from "./Post";
import styles from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData();
  return (
    <>
      {posts.length !== 0 && (
        <ul className={styles.posts}>
          {posts.map((el) => (
            <Post key={el.id} id={el.id} author={el.author} body={el.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <p styles={{ textAlign: "center", color: "white" }}>
          No availiable posts
        </p>
      )}
    </>
  );
};

export default PostList;

export async function postsLoader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data.posts;
}
