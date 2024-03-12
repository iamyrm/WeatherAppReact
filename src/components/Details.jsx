import React from "react";
import Footer from "./Footer";

const Details = () => {
  return (
    <>
      <p className="md:text-left my-2">More Details</p>

      <div className="   md:my-5 grid grid-cols-2 gap-4 ">
        <div className=" md:h-20 h-14 rounded-md flex items-center justify-center gap-1 md:gap-10">
          <img className="h-12 md:h-14" src="weather.png" alt="Weather" />
          <div>
            <p className="text-xl font-bold">19:13 PM</p>
            <p>Sunset</p>
          </div>
        </div>
        <div className=" md:h-20 h-14 rounded-md flex items-center justify-center gap-1 md:gap-10">
          <img className="h-12 md:h-14" src="weather.png" alt="Weather" />
          <div>
            <p className="text-xl font-bold">82</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className=" md:h-20 h-14 rounded-md flex items-center justify-center gap-1 md:gap-10">
          <img className="h-12 md:h-14" src="weather.png" alt="Weather" />
          <div>
            <p className="text-xl font-bold">Pressure</p>
            <p>1 mmHg</p>
          </div>
        </div>
        <div className=" md:h-20 h-14 rounded-md flex items-center justify-center gap-1 md:gap-10">
          <img className="h-12 md:h-14" src="weather.png" alt="Weather" />
          <div>
            <p className="text-xl font-bold">Wind</p>
            <p>4.79</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
