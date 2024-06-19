import React from 'react'

const AboutUs = () => {
    return (
        <div className="w-full h-screen md:h-auto">
            <div className="w-full h-screen flex-wrap text-center ">
                <div className=" text-4xl text-black font-semibold capitalize  hover:drop-shadow-md transition-all duration-100 ease-out text-center  pt-3">About Us</div>
                <h1 className="text-3xl my-4 py-3 ">Welcome to 
                <span className="text-orange-400 font-semibold">Tasty--Food Delivery</span> 
                </h1>
                <p className="text-lg my-2 ">we are passionate about delivering delicious meals right to your doorstep.
                </p>
                <p className="text-lg my-2 ">our team is dedicated to providing you with the best culinary experience, <br /> from selecting fresh ingredients to delivering exceptional customer services </p>
                <p className="text-lg my-4 ">At <span className="text-black font-semibold">Tasty--Food Delivery</span>, customer satisfaction is our top priority. <br />we strive to exceed your expectations with every meal,<br /> providing exceptional service and attention to detail every step of the way. </p>
                <p className="text-lg my-2 ">Join us on a culinary journey and experience the convience of food delivery like never before.<br /> Whether you're dining solo, sharing a meal with loved ones, or hosting a gathering,<br /> let <span className="text-black font-semibold"> Tasty--Food Delivery </span>be your trusted partner in culinary exploration.</p>
                <p className="text-lg my-2 ">feel free to explore our menu and place your order today.</p>
            </div>
        </div>
    )
}

export default AboutUs