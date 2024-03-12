import React from "react";
import TempAndImg from "./TempAndImg";
import Details from "./Details";
import Search from "./Search";

const MainPage = () => {
  return (
    <>
      <div className="w-auto md:w-auto bg-black text-white p-2 md:p-5 m-5 m md:mx-[25vw] md:m-10  rounded-md h-auto text-center md:text-left">
        <div className="my-5">Weather Forecasting Web App</div>
        <Search />
        <TempAndImg />
        <Details />
      </div>
    </>
  );
};

export default MainPage;
