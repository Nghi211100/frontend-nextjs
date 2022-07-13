import { getAllPost } from "../lib/post";
import Post from "../components/Post";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = ({ allpost }) => {
  const pageType = "home";

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header pageType={pageType} />
      <div className="mx-4 md:mx-auto justify-center text-center flex md:w-868">
        <div className="md:w-full content-center pt-16 md:mt-0.5">
          <ul>
            {allpost.data.map((post) => (
              <Post key={post.id} post={post} pageType={pageType} />
            ))}
          </ul>
          <div className="w-full pb-24 mb-0.5 text-base">
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
  return {
    props: {
      allpost: allpost,
    },
  };
}
