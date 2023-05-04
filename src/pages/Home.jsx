import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-[url('./1.JPG')] bg-cover overflow-hidden">
      {/* hero section */}
      {/* <div className="flex flex-col justify-between"> */}
      <div className=" w-full h-full flex flex-col justify-between ">
        <h1 className="text-center tracking-[9px] px-2 py-20 font-extrabold text-white ">
          UNDANGAN PERNIKAHAN
        </h1>
        <div className="mt-52 flex items-center justify-center flex-col mb-10">
          <p className=" text-white font-extralight text-4xl text-center border-b-2 py-5 font-dancing">
            Iqbal & Fitri
          </p>
          <small className="text-xl text-white py-3 tracking-[9px] ">
            17 . 07 . 2023
          </small>
          <Link to={"./About"} className="btn btn-wide tracking-[3px]">
            BUKA UNDANGAN
          </Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
