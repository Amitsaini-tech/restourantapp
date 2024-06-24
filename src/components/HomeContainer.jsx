import React from 'react'
import delivery from "../img/delivery.png";
import heroBg from "../img/heroBg.png";
import { heroData } from '../utils/Data';


const HomeContainer = () => {
  const handleErrorc=() => {
    alert("Server not found try again later")
  }
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 gap-1 w-full " id="Home">
      <div className=" flex-1 flex  flex-col items-start  justify-center gap-6">

        <div className="flex items-center justify-center gap-2 bg-orange-100 px-2 py-1 rounded-full">

          <p className="text-base text-orange-400">bike delivery</p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img src={delivery} alt="delivery" className="w-full h-full object-contain" />

          </div>
        </div>

        <p className="text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-black">
          The Fastest delivery in {""}
          <span className="text-orange-500 text-[3rem] md:text-[4.75rem]"> Your City</span>
        </p>
        <p className="text-base text-black text-center md:text-left md:w-[80%]">Order food online from restaurants and get it delivered. Serving in Haryana, Bangalore, Hyderabad, Delhi and more. Order Fuits, chicken, Biryanis and much more from Tasty.
        </p>
        <button type="button"
          className=" bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all">
          <a href="#" onClick={handleErrorc}>order Now</a>
        </button>

      </div>
      <div className=" py-2 flex-1 flex items-center relative ">
        <img src={heroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-656 "
          alt="hero - bg" />

        <div className="w-full h-full absolute flex items-center justiw2fy-center top-0 left-0 px-32 py-4 gap-5 flex-wrap">
        {heroData && heroData.map((n) => (
          <div
          key={n.id} 
          className=" lg:w-190 p-4 rgba(256,256,256,0.6) backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg cursor-pointer">
          <img src={n.imgSrc} alt="i1" className=" w-20 lg:w-40 -mt-10" />
          <p className=" text-base lg:text-lg font-semibold text-black">{n.name}</p>
          <p className=" text-[10px] lg:text-sm font-semibold rgba(156, 160, 171, 1) my-1 lg:my-2">{n.Decp}</p>
          <p className="text-sm rgba(156, 160, 171, 1) font-semibold">
            <span className="text-s text-red-600">Rs. </span>
            {n.Price}</p>
        </div>

        ))}
          
        </div>
      </div>
    </section>
  )
}

export default HomeContainer;