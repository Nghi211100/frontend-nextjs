import React from "react";
import { getPostById, getIdPost } from "../../lib/post";
import axios from "axios";
import Post from "../../components/Post";
import en from "../../public/en/index.json";
import vn from "../../public/vn/index.json";
import { useRouter } from "next/router";

// export async function getStaticProps({ locale, params }) {
//   console.log(locale);
//   const postdata = await getPostById(params.id);
//   return {
//     props: {
//       locale,
//       postdata,
//     },
//   };
// }
// export async function getStaticPaths() {
//   const res = await axios.get(`${process.env.URL_API}/api/posts`);
//   const paths = res.data.data.map((data) => {
//     return {
//       params: {
//         locale,
//         id: data.id.toString(),
//       },
//     };
//   });
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

const detailauthor = ({ postdata, locale }) => {
  const router = useRouter();
  console.log(router);
  const lang = locale === "vn" ? vn : en;
  const pageType = "home";
  return (
    <div>
      <Post key={postdata.id} post={postdata} pageType={pageType} lang={lang} />
    </div>
  );
};

export default detailauthor;
