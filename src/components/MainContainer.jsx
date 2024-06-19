// import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from 'framer-motion';
import { useStateValue } from "../Contexts/StateProvider";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { useEffect, useState } from "react";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import Footer from "./Footer";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();

  const [scrollValue, setScrollValue] = useState(0)
  useEffect(() => { }, [scrollValue, cartShow]);


  return (
    <div className=" w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />


      {/* {Fruits And food } */}

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-black relative before:absolute before: rounded-lg before:content before:w-32 before:h-1 before:-bottom-3 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            our fresh & healthy fruits
          </p>

          {/* Scroll Left and right apply there */}

          <div className=" hidden md:flex items-center gap-3">
            <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all ease-in-out duration-100 hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-1000)}>
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all ease-in-out duration-100 hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(1000)}>
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "Fruits")}
        />
      </section>
      <section >
        <MenuContainer />

        {cartShow &&(
          <CartContainer/>
        )}
        
      </section>
     <section>
      <Footer/>
     </section>
    </div>

  )
}

export default MainContainer;