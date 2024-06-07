import React from "react";
import rectangle12 from "../assets/a1.jpg";
import rectangle9 from "../assets/a2.jpg";
import rectangle10 from "../assets/a3.jpg";
import rectangle11 from "../assets/a4.jpg";

function Elevann() {
  return (
    <div>
      <section className="flex gap-4 p-4 md:overflow-x-auto w-full h-[700px] md:h-full ">
        <div className="flex flex-col md:flex-row gap-4  w-52 h-96 md:w-full md:h-full">
          <div className="flex-none overflow-hidden bg-center bg-cover rounded-lg shadow-md w-full md:w-80">
            <img
              src={rectangle12}
              alt="Product 1"
              width={400}
              height={300}
              className="object-cover w-full md:h-60 h-48"
            />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Name</h3>
              <p className="text-lg font-semibold">Designation</p>
            </div>
          </div>
          <div className="flex-none overflow-hidden bg-center bg-cover rounded-lg shadow-md w-full md:w-80 ">
            <img
              src={rectangle9}
              alt="Product 2"
              width={400}
              height={300}
              className="object-cover w-full md:h-60 h-48"
            />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Name</h3>
              <p className="text-lg font-semibold">Designation</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4  w-52 h-96 md:w-full md:h-full">
          <div className="flex-none overflow-hidden bg-center bg-cover rounded-lg shadow-md w-full md:w-80 ">
            <img
              src={rectangle10}
              alt="Product 3"
              width={400}
              height={300}
              className="object-cover w-full md:h-60 h-48"
            />
            <div className="p-4 text-black">
              <h3 className="mb-2 text-lg font-semibold">Name</h3>
              <p className="text-lg font-semibold">Designation</p>
            </div>
          </div>
          <div className="flex-none overflow-hidden bg-center bg-cover rounded-lg shadow-md w-full  md:w-80 ">
            <img
              src={rectangle11}
              alt="Product 4"
              width={400}
              height={300}
              className="object-cover w-full md:h-60 h-48"
            />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Name</h3>
              <p className="text-lg font-semibold">Designation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Elevann;
