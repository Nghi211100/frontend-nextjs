import React from "react";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAuthors } from "../lib/post";
import en from "../public/en/index.json";
import vn from "../public/vn/index.json";

export async function getServerSideProps({ locale }) {
  const authordata = await getAuthors();
  return {
    props: {
      locale: locale,
      authordata: authordata,
    },
  };
}

const author = ({ authordata, locale }) => {
  const lang = locale === "vn" ? vn : en;
  const pageType = "author";
  return (
    <div>
      <Header pageType={pageType} lang={lang} />
      <div className="mt-[12rem] md:mt-[21rem]">
        {authordata.data.map((data) => (
          <>
            <Author key={data.id} authordata={data} lang={lang} />
            <div className="border-b border-solid border-slate-300 mx-24 last:hidden"></div>
          </>
        ))}
      </div>
      <Footer lang={lang} />
    </div>
  );
};

export default author;
