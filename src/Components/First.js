import React from "react";

function First() {
  return (
    <>
      <div>
        <div className="relative bg-[#850F6B] text-white items-center justify-end p-4 flex flex-col max-w-full h-[500px]  sm:h-[600px]  ">
          <div className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-6">
            <span className="bg-white rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3" />
            <span className="bg-white rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 opacity-50" />
            <span className="bg-white rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 opacity-50" />
            <span className="bg-white rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 opacity-50" />
          </div>
        </div>
      </div>
    </>
  );
}

export default First;
