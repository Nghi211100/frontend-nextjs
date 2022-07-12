import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-700 w-full h-auto p-10 text-lg text-slate-100 bottom-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="w-full">
          <div className="font-bold pb-3">About us</div>
          <div className="text-sm text-slate-400">
            <div>The Company Technology</div>
            <div>Established In 2019</div>
            <div>...</div>
            <div>...</div>
          </div>
        </div>
        <div className="w-full">
          <div className="font-bold pb-3">Call</div>
          <div className="text-sm text-slate-400">
            <div>Phone number: 88888888</div>
            <div>...</div>
            <div>...</div>
            <div>...</div>
          </div>
        </div>
        <div className="w-full">
          <div className="font-bold pb-3">Address</div>
          <div className="text-sm text-slate-400">
            <div>DaKao ward, district 1, HCM</div>
            <div>...</div>
            <div>...</div>
            <div>...</div>
          </div>
        </div>
        <div className="w-full">
          <div className="font-bold pb-3">Socicals</div>
          <div className="text-sm text-slate-400 flex justify-evenly">
            <div>Facebook</div>
            <div>Youtube</div>
            <div>Twitter</div>
            <div>Telegram</div>
          </div>
        </div>
      </div>

      <div className="flex text-xs md:text-sm lg:text-base w-full pt-7 justify-center text-slate-300">
        © Demo Blog 2022. Published with Nghi Van
      </div>
    </div>
  );
};

export default Footer;
