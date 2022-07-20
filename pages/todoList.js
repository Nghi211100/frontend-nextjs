import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import en from "../public/en/index.json";
import vn from "../public/vn/index.json";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Todo from "../components/Todo";
import AddTodo from "../components/AddTodo";
import Footer from "../components/Footer";
import Auth from "../components/Auth";
import Account from "../components/Account";

const todoList = ({ locale, todos }) => {
  const lang = locale === "vn" ? vn : en;
  const pageType = "home";
  const [session, setSession] = useState(null);
  const [acountDetail, setAccountDetail] = useState(false);
  const [works, setWorks] = useState(todos);

  const handleClickAcountDetail = () => {
    setAccountDetail(!acountDetail);
  };
  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  const handleupdateStatus = async (id, valueComplete) => {
    const { data } = await supabase
      .from("work")
      .update({ complete: !valueComplete })
      .eq("id", id);
    let item;
    data.map((x) => (item = x));
    setWorks(works.map((x) => (x.id == item.id ? item : x)));
  };

  const handleButtonAdd = async (valueName) => {
    const { data } = await supabase.from("work").insert([{ name: valueName }]);
    let item;
    data.map((x) => (item = x));
    setWorks([...works, item]);
  };

  const [countUnComplete, setCountUncomplete] = useState(0);
  useEffect(() => {
    let count = 0;
    works.map((work) => (work.complete == false ? (count = count + 1) : count));
    setCountUncomplete(count);
  }, [works]);

  const removeWork = async (id) => {
    const { data } = await supabase.from("work").delete().eq("id", id);
    let item;
    data.map((x) => (item = x));
    setWorks(works.filter((x) => x.id !== item.id));
  };
  const updateValueName = async (id, valueName) => {
    const { data } = await supabase
      .from("work")
      .update({ name: valueName })
      .eq("id", id);
    let item;
    data.map((x) => (item = x));
    setWorks(works.map((x) => (x.id == item.id ? item : x)));
  };
  return (
    <>
      {acountDetail ? (
        <>
          <Account
            key={session.user.id}
            session={session}
            handleClickAcountDetail={handleClickAcountDetail}
          />
        </>
      ) : (
        <>
          {!session ? (
            <Auth />
          ) : (
            <>
              <Head>
                <title>Todo List</title>
              </Head>
              <Header
                pageType={pageType}
                lang={lang}
                session={session}
                handleClickAcountDetail={handleClickAcountDetail}
                countUnCompleteList={countUnComplete}
              />
              <div className="md:mx-auto justify-center text-center flex md:w-868">
                <div className="w-[95%] md:w-full content-center py-3 md:p-16 md:pt-[4.05rem]">
                  <ul className="w-full flex-col justify-center items-center shadow py-5">
                    <p className="text-3xl text-zinc-600 font-bold pb-5">
                      List Works don't use redux
                    </p>
                    {works.map((work, index) => (
                      <Todo
                        key={index + 1}
                        work={work}
                        handleupdateStatus={handleupdateStatus}
                        removeWork={removeWork}
                        updateName={updateValueName}
                        index={index}
                      />
                    ))}

                    <AddTodo ButtonAdd={handleButtonAdd} />
                  </ul>
                  <div></div>
                </div>
              </div>
              <Footer lang={lang} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default todoList;

export async function getStaticProps() {
  const { data } = await supabase.from("work").select("*");
  return {
    props: {
      todos: data,
    },
  };
}
