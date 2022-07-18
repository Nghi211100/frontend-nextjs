import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[900px] mx-auto flex justify-center items-center h-screen">
      <div className="flex flex-col">
        <p className="pb-5 font-bold text-[30px]">
          Sign in via magic link with your email below
        </p>
        <div className="flex w-[600px] justify-between ">
          <input
            className="border rounded-[5px] w-[80%] pl-2"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
            }}
            className="border rounded-[5px] p-2 w-[15%] bg-emerald-400"
            disabled={loading}
          >
            <span>{loading ? "Loading ..." : "Send"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
