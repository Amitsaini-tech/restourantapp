import React from 'react';
import delivery from "../img/delivery.png";
import no_Minimum from "../img/no_Minimum.png";
import Track_order from "../img/Track_order.png";
import qualityfood from "../img/qualityfood.png";

const Services = () => {
  return (
    <div className="  w-full h-full   text-center capitalize ">
      <div>
      <div className="flex flex-col justify-start items-center my-0">
          <p className=" text-5xl text-teal-600">Services</p>
        </div>
        <div className="flex flex-col justify-start items-center my-3">
          <img src={delivery}  className=" w-32  " />
          <p className="text-lg font-semibold">Fast Delivery</p>
          <p className=" text-base text-gray-500">experience superfast delivery for food delivered fresh & on time.</p>
        </div>
        <div className="flex flex-col justify-start items-center my-3 ">
          <img src={no_Minimum}  className=" w-32 " />
          <p className="text-lg font-semibold">no minimum order</p>
          <p className=" text-base text-gray-500">order in for yourself or for the group, with no restrictions<br /> on order value</p>
        </div>
        <div className="flex flex-col justify-start items-center my-3">
          <img src={Track_order}  className=" w-32 " />
          <p className="text-lg font-semibold">live order tracking</p>
          <p className=" text-base text-gray-500">know where your order is at all times, from the restaurant<br /> to your doorstep</p>
        </div>
        <div className="flex flex-col justify-start items-center my-3">
          <img src={qualityfood}  className=" w-32 " />
          <p className="text-lg font-semibold">high quality food</p>
          <p className=" text-base text-gray-500">Food quality is related to its safety, sustainability, and nutritional value. <br /> High quality foods have a good flavor, aroma, appearance, and texture.</p>
        </div>
      </div>
    </div>
  )
}

export default Services