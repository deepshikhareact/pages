import React from "react";
import Image from "../assets/samm.jpg";

function Nine() {
  return (
    // <section className="bg-gray-100">
    //   <div className="flex items-center justify-center max-w-5xl px-8 py-12 mx-auto flex-col">
    //     <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
    //       <div className="flex flex-col p-8 bg-white border shadow-xl rounded-4xl shadow-gray-500/10 lg:p-12">
    //         <div className="relative h-96 w-full overflow-hidden rounded-xl">
    //           <div
    //             className="absolute inset-0 bg-cover bg-center bg-image transition-transform duration-300 ease-in-out hover:scale-110"
    //             style={{
    //               backgroundImage: "url('https://via.placeholder.com/400x600')",
    //             }}
    //           >
    //             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl">
    //               this is first cart
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col p-8 bg-white border shadow-xl rounded-4xl shadow-gray-500/10 lg:p-12">
    //         <div className="relative h-96 w-full overflow-hidden rounded-xl">
    //           <div
    //             className="absolute inset-0 bg-cover bg-center bg-image transition-transform duration-300 ease-in-out hover:scale-110"
    //             style={{
    //               backgroundImage: "url('https://via.placeholder.com/400x600')",
    //             }}
    //           >
    //             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl">
    //               this is second cart
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      <div class="flex mx-auto justify-center items-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:m-6">
          <div class="flex flex-col  w-full xl:w-96 h-[750px] bg-[#ffffff] text-[#0a0a0a] ">
            <figure class="flex justify-center items-center overflow-hidden">
              <img
                src={Image}
                alt="Card Preview"
                className="w-[438px] h-[599px] transition-transform duration-300 ease-in-out hover:scale-110 transform n"
              />
            </figure>
            <div class="flex flex-col p- h-">
              <div class="  text-lg font-semibold">
                Name of the work or project
                <br />
                goes here in 2 lines
                <div className="my-6 border-t-4 rounded border-purple-500 w-2/3" />
              </div>
            </div>
          </div>
          <div class="flex flex-col  w-full xl:w-96 h-[750px] bg-[#ffffff] text-[#0a0a0a] ">
            <figure class="flex justify-center items-center overflow-hidden">
              <img
                src={Image}
                alt="Card Preview"
                className="w-[438px] h-[599px] transition-transform duration-300 ease-in-out hover:scale-110 transform n"
              />
            </figure>
            <div class="flex flex-col p- h-">
              <div class="  text-lg font-semibold">
                Name of the work or project
                <br />
                goes here in 2 lines
                <div className="my-6 border-t-4 rounded border-purple-500 w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nine;
