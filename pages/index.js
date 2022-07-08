import Head from "next/head";
import style from "./index.module.css";

import { getAllPost } from "../lib/post";

import Post from "../components/Post";

const Home = ({ allpost }) => {
  const home = true;
  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>This is home page</h1>
        <ul className={style.postlist}>
          {allpost.map((post) => (
            <Post key={post.id} post={post} home={home} />
          ))}
        </ul>
      </div>
    </>
  );
};
export async function getStaticProps() {
  const data = await getAllPost();
  return {
    props: {
      allpost: data,
    },
  };
}
export default Home;
