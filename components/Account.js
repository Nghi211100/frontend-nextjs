import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Avatar from "./Avatar";
import { useRouter } from "next/dist/client/router";

export default function Account({ session, handleClickAcountDetail, header }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  const router = useRouter();

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {header == true ? (
        <>
          <Avatar url={avatar_url} header={true} />
          <label
            className="pr-2 font-bold hover:cursor-pointer"
            htmlFor="username"
            onClick={() => {
              handleClickAcountDetail();
            }}
          >
            {username}
          </label>
          <button
            className="border-l border-solid border-x-neutral-300 pl-2"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </button>
        </>
      ) : (
        <div className="max-w-[500px] h-screen mx-auto flex flex-col justify-center">
          <div className="h-max bg-orange-50 rounded p-5">
            <div className="p-2 flex justify-evenly">
              <label htmlFor="email" className="p-2 text-bold">
                Email
              </label>
              <input
                id="email"
                type="text"
                value={session.user.email}
                disabled
                className="px-2 py-1 border rounded-[5px]"
              />
            </div>
            <div className="p-2 flex justify-evenly">
              <label htmlFor="username" className="p-2 text-bold">
                Name
              </label>
              <input
                id="username"
                type="text"
                value={username || ""}
                onChange={(e) => setUsername(e.target.value)}
                className="px-2 py-1 border rounded-[5px]"
              />
            </div>
            <div className="p-2 flex justify-evenly">
              <label htmlFor="website" className=" p-2 text-bold">
                Website
              </label>
              <input
                id="website"
                type="website"
                value={website || ""}
                onChange={(e) => setWebsite(e.target.value)}
                className="px-2 py-1 border rounded-[5px]"
              />
            </div>
            <div className="m-2 p-2 text-bold text-center flex justify-evenly">
              <Avatar
                url={avatar_url}
                header={false}
                onUpload={(url) => {
                  setAvatarUrl(url);
                  updateProfile({ username, website, avatar_url: url });
                }}
              />
            </div>

            <div className="w-1/5 mx-auto border rounded-[5px] p-2 text-center bg-green-400">
              <button
                onClick={() => {
                  updateProfile({
                    username,
                    website,
                    avatar_url,
                  });
                  handleClickAcountDetail();
                  router.push("/");
                }}
                disabled={loading}
              >
                {loading ? "Loading ..." : "Update"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
