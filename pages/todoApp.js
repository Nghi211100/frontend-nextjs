import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import en from "../public/en/index.json";
import vn from "../public/vn/index.json";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import {
  getWorks as listWorks,
  updateStatus,
  addNewWork,
  removeOneWork,
  updateName,
} from "../redux/actions/workAction";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/Todo";
import AddTodo from "../components/AddTodo";

const Home = ({ locale }) => {
  const lang = locale === "vn" ? vn : en;
  const pageType = "home";
  const [session, setSession] = useState(null);
  const [acountDetail, setAccountDetail] = useState(false);

  const handleClickAcountDetail = () => {
    setAccountDetail(!acountDetail);
  };
  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  const dispatch = useDispatch();
  const getAllWorks = useSelector((state) => state.allWorkReducer);
  const { works, loading } = getAllWorks;
  useEffect(() => {
    dispatch(listWorks());
  }, [dispatch]);

  const handleupdateStatus = (id, valueComplete) => {
    dispatch(updateStatus(id, valueComplete));
  };
  const handleButtonAdd = (valueName) => {
    dispatch(addNewWork(valueName));
  };
  const removeWork = (id) => {
    dispatch(removeOneWork(id));
  };
  const updateValueName = (id, valueName) => {
    dispatch(updateName(id, valueName));
  };
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <Header
        pageType={pageType}
        lang={lang}
        session={session}
        handleClickAcountDetail={handleClickAcountDetail}
      />
      <div className="mx-4 md:mx-auto justify-center text-center flex md:w-868">
        <div className="md:w-full content-center p-16 md:pt-[4.05rem]">
          <ul className="w-full flex-col justify-center items-center shadow py-5">
            <p className="text-3xl text-zinc-600 font-bold pb-5">List Works</p>
            {loading == true ? (
              <div>Data fetching, please wait ...</div>
            ) : (
              <>
                {works.map((work) => (
                  <Todo
                    key={work.id}
                    work={work}
                    handleupdateStatus={handleupdateStatus}
                    removeWork={removeWork}
                    updateName={updateValueName}
                  />
                ))}
              </>
            )}

            <AddTodo ButtonAdd={handleButtonAdd} />
          </ul>
          <div></div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
};

export default Home;
