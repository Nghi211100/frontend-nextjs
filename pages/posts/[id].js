import React from "react";
import Post from "../../components/Post";
import { getPostById, getIdPost } from "../../lib/post";
import style from "./postpage.module.css";

export async function getStaticProps({ params }) {
  const postdata = await getPostById(params.id);
  return {
    props: {
      postdata,
    },
  };
}
export async function getStaticPaths() {
  const paths = await getIdPost();
  return {
    paths,
    fallback: false,
  };
}

const PostPage = ({ postdata }) => {
  const home = false;
  return (
    <>
      <div className={style.container__postpage}>
        <Post key={postdata.id} post={postdata} home={home} />
      </div>
    </>
  );
};

export default PostPage;
