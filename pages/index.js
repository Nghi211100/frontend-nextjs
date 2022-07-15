import { getAllPost } from "../lib/post";
import Post from "../components/Post";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import en from "../public/en/index.json";
import vn from "../public/vn/index.json";

const Home = ({ locale, allpost }) => {
  const lang = locale === "vn" ? vn : en;
  const pageType = "home";
  return (
    <>
      <Head>
        <title>{lang.Home_Page}</title>
      </Head>
      <Header pageType={pageType} lang={lang} />
      <div className="mx-4 md:mx-auto justify-center text-center flex md:w-868">
        <div className="md:w-full content-center pt-16 md:pt-[4.05rem]">
          <ul>
            {allpost.data.map((post) => (
              <Post key={post.id} post={post} pageType={pageType} lang={lang} />
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
      <Footer lang={lang} />
    </>
  );
};

export default Home;
export async function getServerSideProps({ locale, query }) {
  let { page } = query;
  page ? (page = page) : (page = 1);
  const allpost = await getAllPost(page);
  return {
    props: {
      locale: locale,
      allpost: allpost,
    },
  };
}
