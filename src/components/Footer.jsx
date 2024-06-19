import React from 'react'
import logo from "../img/logo.png"

const Footer = () => {
    return (
        <div className=" sticky bottom-0 w-screen h-42 p-3 px-4 md:p-3 md:px-10   ">
        
            <div className="hidden md:flex w-full h-full items-center justify-evenly">
                <div className="flex items-center gap-2">
                    <img src={logo} className="w-8 object-cover" alt="Logo" />
                    <p className="text-black text-xl font-bold">Tasty</p>
                </div>
          
                <div className="flex items-center gap-12">
                    <div className="flex  items-center gap-12 ">
                        <div className="flex flex-col items-center text-base text-black m-5">
                            <p className="text-base font-bold my-3">Company</p> 
                        <p className="text-base  mx-3">About</p>
                        <p className="text-base  mx-3">Careers</p>
                        <p className="text-base  mx-3">Team</p>
                        
                        
                        </div>
                        <div className="flex flex-col items-center text-base text-black m-5">
                            <p className="text-base font-bold my-3">Contact us</p> 
                        <p className="text-base  mx-3">Help & support</p>
                        <p className="text-base  mx-3">Partner with us</p>
                        <p className="text-base  mx-3">Ride With Us</p>
                        
                        </div>
                        <div className="flex flex-col items-center text-base text-black m-5">
                            <p className="text-base font-bold my-3">Legal </p>
                        <p className="text-base  mx-3">terms & conditions </p>
                        <p className="text-base  mx-3">Cookie Policy</p>
                        <p className="text-base  mx-3">Privacy Policy</p>
                        
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div className=" w-full h-20 flex flex-row justify-evenly items-end bg-orange-500 capitalize rounded-bl-full rounded-br-full ">
                    <div className="flex px-2 mx-8 my-3">&copy;2024 Tasty.All right reserved.</div>
                    <div className="flex text-sm mx-8 px-2 my-3">
                        <p className="text-white">
                            <span className=" m-3">Privacy policy</span>
                            |
                            <span className="m-3">compliance</span>
                            |
                            <span className="m-3">refund & cancellation policy</span>
                        </p>
                    </div>
                </div>
            
        </div>
    )
}

export default Footer