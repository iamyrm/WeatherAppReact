import React from "react";
import SearchImg from "../images/search.png";

const Search = () => {
  return (
    <>
      <form className="m-2 flex justify-center">
        <input
          className="rounded-md h-7 p-2"
          placeholder="Search Location"
          type="search"
          name=""
          id=""
        />
        <button className="mx-3" type="submit">
          <img className="h-6  hover:scale-105" src={SearchImg} alt="Search" />
        </button>
      </form>
    </>
  );
};

export default Search;
