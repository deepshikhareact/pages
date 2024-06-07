import React from "react";
import Image from "../assets/samm.jpg";
import Rectangle from "../assets/Rectangle.png";
import Rectangle13 from "../assets/img3.jpg";
const Five = () => {
  return (
    <div>
      <div className="flex overflow-y-auto gap-6 p-6 md:overflow-hidden flex-row items-center justify-start md:justify-center h-[450px] ">
        <div
          className="flex flex-col items-start justify-around p-6 space-y-4 bg-center bg-cover "
          style={{
            backgroundImage: `url(${Image})`,
            width: "350px",
            height: "378px",
          }}
        >
          <span className="flex justify-center text-sm uppercase text-[#d1d5db]">
            Category
          </span>
          <h2 className="text-lg font-bold leading-tight text-white md:text-2xl">
            Introduction line heading or value proposition goes here in 4 lines.
          </h2>
          <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md md:py-2 md:px-4 hover:bg-neutral-800 hover:text-white">
            Know More
          </button>
        </div>
        <div
          className="flex flex-col items-start justify-around p-6 space-y-4 bg-center bg-cover "
          style={{
            backgroundImage: `url(${Rectangle})`,
            width: "350px",
            height: "378px",
          }}
        >
          <span className="flex justify-center text-sm uppercase text-[#d1d5db]">
            Category
          </span>
          <h2 className="text-lg font-bold leading-tight text-white md:text-2xl">
            Introduction line heading or value proposition goes here in 4 lines.
          </h2>
          <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md md:py-2 md:px-4 hover:bg-neutral-800 hover:text-white">
            Know More
          </button>
        </div>
        <div
          className="flex flex-col items-start justify-around p-6 space-y-4 bg-center bg-cover "
          style={{
            backgroundImage: `url(${Rectangle13})`,
            width: "350px",
            height: "378px",
          }}
        >
          <span className="flex justify-center text-sm uppercase text-[#d1d5db]">
            Category
          </span>
          <h2 className="text-lg font-bold leading-tight text-white md:text-2xl">
            Introduction line heading or value proposition goes here in 4 lines.
          </h2>
          <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md md:py-2 md:px-4 hover:bg-neutral-800 hover:text-white">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Five;
