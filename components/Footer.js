import React from "react";

const Footer = ({ lang }) => {
  return (
    <div className="h-auto border-t border-[#d8d8d8] border-solid bottom-0 w-full">
      <div className="md:max-w-[900px] md:flex md:flex-row-reverse md:mx-auto md:px-4">
        <div className="flex text-center flex-col py-10 md:pb-[4.15rem] px-4 md:px-0 md:w-1/2 md:pl-8">
          <div className="pt-[0.4rem] pb-4 md:pt-[0.5rem] md:pb-[0.85rem] text-[20px] font-[400] md:text-[24px]">
            Get new posts in your inbox!
          </div>
          <div className="text-[17px] text-slate-800 pb-[1.45rem] md:pb-[1.7rem] md:text-[19px]">
            Subcribers also get access to extra member-only content.
          </div>
          <button className="border border-solid border-[#d8d8d8] rounded-[0.2rem] text-[18px] font-bold mx-auto py-2 md:py-[0.63rem] px-4 w-max shadow-[0px_2px_10px_rgb(0,0,0,6%)]">
            Subcribe now
          </button>
          <div className="text-[15px] text-zinc-500 pt-6 md:pt-[1.4rem] pb-1">
            Unsubcribe any at time.
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col px-4 md:px-0 py-12 md:py-11 justify-center text-slate-800  border-t border-[#d8d8d8] border-solid md:border-t-0 md:border-r">
          <div className="pb-[1.4rem] text-[22px] font-bold md:font md:text-[1.8rem]">
            Range Theme
          </div>
          <div className="pb-[3.1rem]">
            <p className="text-[17px] w-max tracking-wide leading-5 border-b border-solid border-[#e9e9e9]">
              Styles
            </p>
            <p className="pt-[0.15rem] text-[17px] w-max tracking-wide leading-5 border-b border-solid border-[#e9e9e9]">
              Buy the theme
            </p>
            <p className="pt-[0.15rem] text-[17px] w-max tracking-wide leading-5 border-b border-solid border-[#e9e9e9]">
              Docs & Help
            </p>
            <p className="pt-[0.15rem] text-[17px] w-max tracking-wide leading-5 border-b border-solid border-[#e9e9e9]">
              More themes
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[15px] w-max tracking-wide leading-5 border-b border-solid border-[#e9e9e9]">
              © <b>Range Theme </b> 2022.
            </p>
            <p className="text-[14px] w-max tracking-wide leading-5 border-b border-solid border-[#e9e9e9]">
              Published with Range and Ghost
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
