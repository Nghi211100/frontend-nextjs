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
      <div className="mx-auto text-center justify-center flex pt-ab-header md:pt-44 md:mt-0.5 z-10">
        <div className="mx-auto text-center">
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
