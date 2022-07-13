import React from "react";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAuthors } from "../lib/post";

export async function getServerSideProps() {
  const authordata = await getAuthors();
  return {
    props: {
      authordata: authordata,
    },
  };
}

const author = ({ authordata }) => {
  const pageType = "author";
  return (
    <div>
      <Header pageType={pageType} />
      <div className="mt-[12rem] md:mt-[21rem]">
        {authordata.data.map((data) => (
          <>
            <Author key={data.id} authordata={data} />
            <div className="border-b border-solid border-slate-300 mx-24 last:hidden"></div>
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default author;
