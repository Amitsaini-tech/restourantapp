import React, { useState } from 'react'
import { IoFastFood } from "react-icons/io5"
import { Categories } from "../utils/Data"
import { motion } from "framer-motion"
import RowContainer from './RowContainer'
import { useStateValue } from '../Contexts/StateProvider'

const MenuContainer = () => {
    const [filter, setfilter] = useState("chicken");
    const [{ foodItems }, dispatch] = useStateValue();

    return (
        <section className="w-full my-6" id='Menu'>
            <div className="w-full flex flex-col items-center justify-between">
                <p className="text-2xl font-semibold capitalize text-black relative before:absolute before: rounded-lg before:content before:w-32 before:h-1 before:-bottom-3 before:left-7 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 ">
                    our Hot Dishes
                </p>
                {/* use that overflow x scroll but not in use currently */}
                <div className="flex w-full items-center justify-start lg:justify-center gap-8 mt-11 ">

                    {Categories && Categories.map(Category => (

                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            key={Category.id}
                            className={`group ${filter === Category.urlParamName ? "bg-red-600" : "bg-white"} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-600 `}
                            onClick={() => setfilter(Category.urlParamName)}
                        >
                            <div
                                className={`w-10 h-10 rounded-full shadow-lg ${filter === Category.urlParamName
                                    ? "bg-white"
                                    : "bg-red-600"
                                    } group-hover:bg-rose-200 flex items-center justify-center`}
                            >
                                <IoFastFood
                                    className={`${filter === Category.urlParamName
                                        ? "text-black"
                                        : "text-white"
                                        } group-hover:text-black text-lg`}
                                />
                            </div>
                            <p
                                className={`text-sm ${filter === Category.urlParamName
                                    ? "text-white"
                                    : "text-black"
                                    } group-hover:text-white`}>
                                {Category.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
                
                <div className="w-full">
                    <RowContainer flag={false} 
                    data={foodItems?.filter((n) => n.category === filter)}
                    />
                </div>
            </div>
        </section>
    )
}

export default MenuContainer