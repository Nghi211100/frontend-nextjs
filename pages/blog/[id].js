import Head from "next/head";
import React from "react";
import Author from "../../components/Author";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Post from "../../components/Post";
import { getPostById, getIdPost } from "../../lib/post";

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
  const postpage = false;
  return (
    <>
      <Head>
        <title>Post Page</title>
      </Head>
      <Header postpage={postpage} />
      <div className="mx-auto text-center flex">
        <div className="mx-auto text-center mt-20 w-1/2">
          <h1 className="text-xl font-semibold p-3">Detail Post</h1>
          <div>
            <Post key={postdata.id} post={postdata} postpage={postpage} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostPage;
