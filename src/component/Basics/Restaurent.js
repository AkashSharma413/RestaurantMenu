import React, { useState } from 'react';
import "./style.css";
import Menu from './menuAPI';
import MenuCard from "./MenuCard";
import Navbar from "./Navbar"

const uniqueList = [...new Set(
  Menu.map((curElem) => {
    return curElem.category;
  })),
  "All"];

// console.log(uniqueList);

const Restaurent = () => {
  const [MenuData, setMenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if(category==="All"){
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setMenuData(updatedList);

  }

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard MenuData={MenuData} />
    </>
  )
}

export default Restaurent