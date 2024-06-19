import React, { useState } from 'react'
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../utils/firbase.config";
import Logo from "../img/logo.png";
import avatar from "../img/avatar.png"
import { useStateValue } from '../Contexts/StateProvider';
import { actiontype } from '../Contexts/reducer';
import { Link } from 'react-router-dom';
import AboutUs from "./AboutUs";

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue()

  const login = async () => {
    if (!user) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actiontype.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    }
    else {
      setisMenu(!isMenu);
    }
  };
  const logout = () => {
    setisMenu(false);
    localStorage.clear();

    dispatch({
      type: actiontype.SET_USER,
      user: null,
    })
  }
  const showCart = () => {
    dispatch({
      type: actiontype.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  }

  const [isMenu, setisMenu] = useState(false);


  return (
    <header className=" fixed z-50 w-screen p-3 px-4 md:p-3 md:px-16 bg-slate-300 ">
      {/* {desktop & tablet} */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="Logo" />
          <p className="text-black text-xl font-bold">Tasty</p>
        </div>
        {/* {UL tag start here} */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-black cursor-pointer hover:text-cyan-50 duration-100 transition-all ease-in-out"><a href="index.js">Home</a></li>
            {/* <li className="text-base text-black cursor-pointer hover:text-cyan-50 duration-100 transition-all ease-in-out">Menu</li> */}
            <Link to={"/AboutUs"}>
              <li className="text-base text-black cursor-pointer hover:text-cyan-50 duration-100 transition-all ease-in-out"><a href="AboutUs.jsx">About Us</a></li>
              </Link>
            <Link to={"/Services"}> <li className="text-base text-black cursor-pointer hover:text-cyan-50 duration-100 transition-all ease-in-out ">Service</li></Link>
          </ul>
          {/* item cart */}

          <div className="relative flex items-center justify-center" onClick={showCart}>
            <MdShoppingBasket className="text-textcolor text-2xl cursor-pointer" />

            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-3 -right-3 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                <p className="text-xs text-white font-semibold">{cartItems.length}</p>
              </div>
            )}

          </div>
          {/* User section */}
          <div>
            <motion.img whileTap={{ scale: 0.5 }}
              src={user ? user.photoURL
                : avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl cursor-pointer rounded-full" alt="userprofile"
              onClick={login}
            />
            {isMenu && (

              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-slate-50 shadow-xl flex flex-col rounded-lg absolute top-15 right-5 cursor-pointer">

                {
                  user && user.email === "sainiamit3464@gmail.com" && (
                    <Link to={"/createItem"}><p className="px-4 flex items-center justify-between hover:bg-slate-200 transition-all duration-100 text-black text-base" onClick={() => setisMenu(false)}>
                      New Item <MdAdd />
                    </p></Link>
                  )
                }
                <p className="px-4 flex items-center justify-between hover:bg-slate-200 transition-all duration-100 text-black text-base" onClick={logout}>
                  Logout
                  <MdLogout />
                </p>
              </motion.div>
            )
            }

          </div>
        </div>
      </div>

      {/* {/* {Mobile} */}
      <div className=" flex  justify-between items-center md:hidden w-full h-full">

        <div className="relative flex items-center justify-center" onClick={showCart}>
          <MdShoppingBasket className="text-textcolor text-2xl cursor-pointer" />

          {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-3 -right-3 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
              <p className="text-xs text-white font-semibold">{cartItems.length}</p>

            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-7 object-cover" alt="Logo" />
          <p className="text-black text-xl font-bold">Tasty</p>
        </div>
        <div>
          <motion.img whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl cursor-pointer rounded-full" alt="userprofile"
            onClick={login} />

          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {user && user.email === "sainiamit3464@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <div className="px-4 py-2">
                <ul className="flex flex-col  gap-5 ">

                  <li className="text-base text-black cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out" onClick={() => setisMenu(false)}> Home</li>
                  <li className="text-base text-black cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out" onClick={() => setisMenu(false)}>Menu</li>
                  <li className="text-base text-black cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out" onClick={() => setisMenu(false)}>About Us</li>
                  <li className="text-base text-black cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out" onClick={() => setisMenu(false)}>Service</li>
                </ul>
              </div>
              <p className="px-4 py-2 flex items-center justify-between hover:bg-slate-300 transition-all duration-100 text-black text-base cursor-pointer" onClick={logout}>Log Out <MdLogout /> </p>

            </motion.div>

          )}

        </div>
      </div>
    </header>
  );
};

export default Header;