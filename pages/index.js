import { getAllPost, getCategories, getAuthors } from "../lib/post";
import Post from "../components/Post";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = ({ allpost, allcategories, allauthors }) => {
  const postpage = true;

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <div className="mx-auto justify-center text-center flex">
        <div className="content-center md:w-3/4 pt-5 md:pt-20">
          <ul className="p-3">
            {allpost.data.map((post) => (
              <Post key={post.id} post={post} postpage={postpage} />
            ))}
          </ul>
          <div className="w-full p-3 ">
            {[...Array(allpost.meta.pagination.pageCount).keys()].map((x) => (
              <Link key={x + 1} href={`/?page=${x + 1}`}>
                <a
                  className={
                    allpost.meta.pagination.page == x + 1
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
export async function getServerSideProps({ query }) {
  let { page } = query;
  page ? (page = page) : (page = 1);
  const allpost = await getAllPost(page);
  const allcategories = await getCategories();
  const allauthors = await getAuthors();
  return {
    props: {
      allpost: allpost,
      allcategories: allcategories,
      allauthors: allauthors,
    },
  };
}
