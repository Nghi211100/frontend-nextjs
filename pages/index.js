import { getAllPost } from "../lib/post";
import Post from "../components/Post";
import Head from "next/head";

const Home = ({ allpost }) => {
  const home = true;
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="container xl mx-auto text-center">
        <h1 className="text-xl font-semibold p-3">All posts</h1>
        <ul className="shadow rounded-sm p-3">
          {allpost.map((post) => (
            <Post key={post.id} post={post} home={home} />
          ))}
        </ul>
      </div>
    </>
  );
};
export async function getStaticProps() {
  const data = await getAllPost();
  return {
    props: {
      allpost: data,
    },
  };
}
export default Home;
