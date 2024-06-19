import React, { useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';
import CreateContainer from '../components/CreateContainer';
import { useStateValue } from '../Contexts/StateProvider';
import { getAllFoodItems } from './firebaseFunction';
import { actiontype } from '../Contexts/reducer';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';

const App = () => {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async() =>{
    await getAllFoodItems().then((data)=>{
      dispatch({
        type: actiontype.SET_FOOD_ITEMS,
        foodItems : data,
      })
    });
  };
  useEffect(()=> {
    fetchData();
  },[]);


  return (
    <AnimatePresence>
    <div className="w-screen h-auto flex flex-col bg-slate-100">
      <Header/>
      
      <main className="mt-14 md:mt-18 px-4 md:px-14 pt-3 w-full">
        <Routes>
          <Route path="/*" element={<MainContainer/>} />
          <Route path="/createItem" element={<CreateContainer/>} />
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Services" element={<Services/>}/>
        </Routes>
      </main>
      </div>
      </AnimatePresence>
  );
};

export default App