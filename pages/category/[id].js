import Head from "next/head";
import Link from "next/link";
import React from "react";
import Author from "../../components/Author";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Post from "../../components/Post";
import {
  getAllPost,
  getIdCategories,
  getCategories,
  getAuthors,
} from "../../lib/post";

export async function getServerSideProps({ params, query }) {
  let { page } = query;
  page ? (page = page) : (page = 1);
  const postdata = await getAllPost(page);
  const allcategories = await getCategories();
  const allauthors = await getAuthors();
  return {
    props: {
      id: params.id,
      postdata,
      allcategories: allcategories,
      allauthors: allauthors,
    },
  };
}

const PostPage = ({ postdata, id, allcategories, allauthors }) => {
  const postpage = true;
  return (
    <>
      <Head>
        <title>Post Page</title>
      </Head>
      <Header />
      <div className="mx-auto text-center flex">
        <div className="content-left w-1/4 border border-solid bg-slate-50">
          <Menu allcategories={allcategories} />
        </div>
        <div className="mx-auto text-center mt-20 w-1/2">
          <h1 className="text-xl font-semibold p-3">All post</h1>
          <div>
            {postdata.data.map((e) =>
              e.attributes.categories.data.map(
                (x) =>
                  x.id == id && <Post key={e.id} post={e} postpage={postpage} />
              )
            )}
          </div>
          <div className="w-full p-3 ">
            {[...Array(postdata.meta.pagination.pageCount).keys()].map((x) => (
              <Link key={x + 1} href={`/categories/${id}&page=${x + 1}`}>
                <a
                  className={
                    postdata.meta.pagination.page == x + 1
                      ? "px-3 font-semibold text-cyan-400"
                      : "px-3"
                  }
                >
                  {x + 1}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="content-right w-1/4 border border-solid bg-slate-50">
          <Author allauthors={allauthors} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostPage;
