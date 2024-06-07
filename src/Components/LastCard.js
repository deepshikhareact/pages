import React from 'react'
import Rectangle from "../assets1/img/Rectangle.png";
import rectangle1 from "../assets1/img/rectangle1.png";
import rectangle7 from "../assets1/img/rectangle7.png";
import rectangle11 from "../assets1/img/rectangle11.png";
// import Image from "../assets/img/Image.png";
const LastCard = () => {
  return (

    <div className="flex h-auto gap-2 p-2 overflow-x-auto overflow-y-auto md:flex-nowrap">
  <div
    className="flex flex-col items-start justify-between p-6 space-y-4 bg-center bg-cover rounded-lg min-w-[300px] sm:min-w-[350px] md:w-1/4 h-[450px]"
    style={{ backgroundImage: `url(${Rectangle})` }}
  >
    <span className="text-sm uppercase text-[#d1d5db]">SERVICE</span>
    <h2 className="text-xl font-bold leading-tight text-white">
   User Research <br />
   &insights
    </h2>
    
  </div>
  <div
    className="flex flex-col items-start justify-between p-6 space-y-4 bg-center bg-cover rounded-lg min-w-[300px] sm:min-w-[350px] md:w-1/4 h-[450px]"
    style={{ backgroundImage: `url(${rectangle1})` }}
  >
    <span className="text-sm uppercase text-[#d1d5db]">CASE STUDY</span>
    <h2 className="text-xl font-bold leading-tight text-white">
    User Research<br />
   &insights
    </h2>
   
  </div>
  <div
    className="flex flex-col items-start justify-between p-6 space-y-4 bg-center bg-cover rounded-lg min-w-[300px] sm:min-w-[350px] md:w-1/4 h-[450px]"
    style={{ backgroundImage: `url(${rectangle7})` }}
  >
    <span className="text-sm uppercase text-[#f3f8ff]">FEATURED WORK</span>
    <h2 className="text-xl font-bold leading-tight text-white">
    User Research <br />
   &insights
    </h2>
    
  </div>
  <div
    className="flex flex-col items-start justify-between p-6 space-y-4 bg-center bg-cover rounded-lg min-w-[300px] sm:min-w-[350px] md:w-1/4 h-[450px]"
    style={{ backgroundImage: `url(${rectangle11})` }}
  >
    <span className="text-sm uppercase text-[#ffffff]">HAND PICKED</span>
    <h2 className="text-xl font-bold leading-tight text-white">
    User Research <br />
   &insights
    </h2>
    
  </div>
</div>

//     <div>
//       <section className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-6">
//       {/* <div className="overflow-hidden bg-center bg-cover rounded-lg shadow-md dark:bg-gray-950">
//         <img src={Rectangle}alt="Product 1" width={400} height={300} className="object-cover w-full h-60" />
//         <div className="p-4">
//           <h3 className="mb-2 text-lg font-semibold">Stylish Sunglasses</h3>
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             Protect your eyes in style with our premium sunglasses.
//           </p>
//         </div>
//       </div> */}
//       <div className="relative overflow-hidden bg-center bg-cover rounded-lg shadow-md dark:bg-gray-950">
//   <img src={Rectangle} alt="Product 1" width={400} height={300} className="object-cover w-full h-full" />
//   <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
//     <div className="text-center">
//       <h3 className="mb-2 text-lg font-semibold text-white">Stylish Sunglasses</h3>
//       <p className="text-sm text-gray-200 dark:text-gray-400">
//         Protect your eyes in style with our premium sunglasses.
//       </p>
//     </div>
//   </div>
// </div>

// <div className="relative overflow-hidden bg-center bg-cover rounded-lg shadow-md dark:bg-gray-950">
//   <img src={rectangle1} alt="Product 1" width={400} height={300} className="object-cover w-full h-full" />
//   <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
//     <div className="text-center">
//       <h3 className="mb-2 text-lg font-semibold text-white">Stylish Sunglasses</h3>
//       <p className="text-sm text-gray-200 dark:text-gray-400">
//         Protect your eyes in style with our premium sunglasses.
//       </p>
//     </div>
//   </div>
// </div>
// <div className="relative overflow-hidden bg-center bg-cover rounded-lg shadow-md dark:bg-gray-950">
//   <img src={rectangle7} alt="Product 1" width={400} height={300} className="object-cover w-full h-full" />
//   <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
//     <div className="text-center">
//       <h3 className="mb-2 text-lg font-semibold text-white">Stylish Sunglasses</h3>
//       <p className="text-sm text-gray-200 dark:text-gray-400">
//         Protect your eyes in style with our premium sunglasses.
//       </p>
//     </div>
//   </div>
// </div>
// <div className="relative overflow-hidden bg-center bg-cover rounded-lg shadow-md dark:bg-gray-950">
//   <img src={rectangle11} alt="Product 1" width={400} height={300} className="object-cover w-full h-full" />
//   <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
//     <div className="text-center">
//       <h3 className="mb-2 text-lg font-semibold text-white">Stylish Sunglasses</h3>
//       <p className="text-sm text-gray-200 dark:text-gray-400">
//         Protect your eyes in style with our premium sunglasses.
//       </p>
//     </div>
//   </div>
// </div>
//   </section> 
//     </div>
  )
}

export default LastCard
