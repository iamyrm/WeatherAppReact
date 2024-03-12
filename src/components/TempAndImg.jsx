import React from "react";

const TempAndImg = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-Us", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <>
      <div className="bg-violet-200 rounded-md flex justify-between md:px-36 items-center gap-5 md:gap-10 my-5 p-2 text-black">
        <img
          className="justify-end"
          src="/weather.png"
          alt="Image"
          width="150"
        />
        <div>
          <div className="float-left text-4xl font-semibold ">25.31°</div>
          <div>
            <div className=" float-left text-xl my-1">CLOUDS</div>
            <div>
              <div className=" float-left text-sm font-thin">Ktm, Nepal.</div>
            </div>
          </div>
          <div className="float-left text-[12px] font-thin mt-1">
            {formattedDate}
          </div>
        </div>
      </div>
    </>
  );
};

export default TempAndImg;
