import React from "react";
import rectangles from "../assets/bgimg.jpg";

const Third = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:h-full p-6 sm:gap-6 ">
        <div className="flex flex-col items-start justify-center flex-1 p-6 text-white bg-blue-600 h-[200px] sm:h-[280px] md:h-[400px] xl:h-[450px] md:p-10 md:w-1/2 group">
          <h1 className="text-2xl font-bold md:text-4xl ">Big Heading Text</h1>
          <p className="mt-4 text-left ">
            Small descriptive text in 3-4 lines can go here. They can be a
            single line or short paragraph too. Adjust the width of this
            container to make sure the text wraps correctly.
          </p>
          <div>
            <button className="px-2 py-2 mt-4 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-black hover:text-white">
              KNOW MORE
            </button>
          </div>
        </div>
        <div
          className="flex flex-col items-start justify-center flex-1 p-6 text-white h-[200px] sm:h-[280px] md:h-[400px] xl:h-[450px] md:p-10   md:w-1/2  group"
          style={{ backgroundImage: `url(${rectangles})` }}
        >
          <h1 className="text-2xl font-bold md:text-4xl">Big Heading Text</h1>
          <p className="mt-4 text-left ">
            Small descriptive text in 3-4 lines can go here. They can be a
            single line or short paragraph too. Adjust the width of this
            container to make sure the text wraps correctly.
          </p>
          <div>
            <button className="px-2 py-2 mt-4 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-black hover:text-white">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Third;
