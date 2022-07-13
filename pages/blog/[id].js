import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
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

const pageType = ({ postdata }) => {
  const pageType = "detailPost";
  return (
    <>
      <Head>
        <title>Post Page</title>
      </Head>
      <Header pageType={pageType} />
      <div className="mx-auto text-center justify-center flex pt-ab-header md:pt-44 md:mt-0.5 z-10">
        <div className="mx-auto text-center">
          <div>
            <Post key={postdata.id} post={postdata} pageType={pageType} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default pageType;
