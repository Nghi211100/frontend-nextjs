import React from "react";

const Footer = ({ lang }) => {
  return (
    <div className="border-t border-solid border-neutral-300 w-full h-auto my-1 md:my-2.5 py-11 md:py-12 px-5 text-2xl md:text-3xl bottom-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="w-full">
          <div className="font-bold pb-5 text-gray-700">{lang.About_us}</div>
          <div className="text-base text-slate-800">
            <div>{lang.The_Company_Technology}</div>
            <div>{lang.Established_In_2019}</div>
            <div>...</div>
            <div>...</div>
          </div>
        </div>
        <div className="w-full">
          <div className="font-bold pb-5 text-gray-700">{lang.Call}</div>
          <div className="text-base text-slate-800">
            <div>{lang.Phone_number}: 88888888</div>
            <div>...</div>
            <div>...</div>
            <div>...</div>
          </div>
        </div>
        <div className="w-full">
          <div className="font-bold pb-5 text-gray-700">{lang.Address}</div>
          <div className="text-base text-slate-800">
            <div>{lang.DaKao_ward_district_1_HCM}</div>
            <div>...</div>
            <div>...</div>
            <div>...</div>
          </div>
        </div>
        <div className="w-full">
          <div className="font-bold pb-5 text-gray-700">{lang.Socicals}</div>
          <div className="text-base text-slate-800 flex justify-evenly">
            <div>Facebook</div>
            <div>Youtube</div>
            <div>Twitter</div>
            <div>Telegram</div>
          </div>
        </div>
      </div>

      <div className="flex text-xs md:text-sm lg:text-base w-full pt-7 justify-center text-slate-800">
        <p>
          © <b>{lang.Demo_Blog} </b> 2022. {lang.Published_with_Nghi_Van}
        </p>
      </div>
    </div>
  );
};

export default Footer;
