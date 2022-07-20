import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Post from "../../components/Post";
import en from "../../public/en/index.json";
import vn from "../../public/vn/index.json";
import { getPostById, getIdPost } from "../../api/post";
import { useRouter } from "next/router";

// export async function getStaticProps({ params }) {
//   const postdata = await getPostById(params.id);
//   return {
//     props: {
//       postdata,
//     },
//   };
// }
// export async function getStaticPaths() {
//   const paths = await getIdPost();
//   return {
//     paths,
//     fallback: false,
//   };
// }
export async function getServerSideProps({ locale, params }) {
  const postdata = await getPostById(params.id);
  return {
    props: {
      locale,
      postdata,
    },
  };
}

const pageType = ({ locale, postdata }) => {
  const lang = locale === "vn" ? vn : en;
  const pageType = "detailPost";
  return (
    <>
      <Head>
        <title>{lang.Post_Page}</title>
      </Head>
      <Header pageType={pageType} lang={lang} />
      <div className="mx-auto text-center justify-center flex pt-[184px] md:pt-[201px] md:mt-0.5 z-10">
        <div className="mx-auto text-center w-screen">
          <Post
            key={postdata.id}
            post={postdata}
            pageType={pageType}
            lang={lang}
          />
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
};

export default pageType;
