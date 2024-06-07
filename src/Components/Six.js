import React from "react";

const Six = () => {
  const cartItems = [
    { id: 1, image: "bg12.jpg", icon: "zoom.png" },
    { id: 2, image: "bg12.jpg", icon: "zoom.png" },
    { id: 3, image: "bg12.jpg", icon: "zoom.png" },
    { id: 4, image: "bg12.jpg", icon: "zoom.png" },
    { id: 5, image: "bg12.jpg", icon: "zoom.png" },
    // ... other cart items
  ];

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-row md:flex-nowrap overflow-y-auto space-x-2 items-center md:justify-center justify-start ">
        {cartItems.map((item) => (
          <div key={item.id} className="flex-none w-56 h-60 relative">
            <div className="w-full h-full bg-white rounded shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={`Cart item ${item.id}`}
                className="object-cover w-full h-full"
              />

              <div className="absolute inset-0 flex justify-center items-center text-white">
                <img
                  src={item.icon}
                  alt={`Icon for cart item ${item.id}`}
                  className="w-14 h-14 transition-transform transform hover:scale-125 cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Six;
