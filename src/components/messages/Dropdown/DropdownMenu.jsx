import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import {  useNavigate } from "react-router-dom";
import "./DropdownMenu.css";


const   MessagesDialog = () => {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/");
      }}
      style={{
        height: "100%",
        width: "100%",
        top: '0px',
        right: '0px',
        left: '0px',
        bottom: "0px",
        position: 'fixed',
        backgroundColor: "transparent",
      }}>
        <DropdownMenu />
    </div>
  );
}


const DropdownMenu = () => {
  // state for csstransition
  const [menuHeight, setMenuHeight] = useState(null);

  {
    /*we use this function as a callback in CSSTransition onEnter prop which runs this callback when it is 
mounted to DOM
*/
  }
  function calcHeight(el) {
    // el.offsetHeight is height in pixels of that component. we use this in dropdown menu style height to set height
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  return (
    <div className="dropdown"  >

      <div className="menu" style={{ "overflow-y": "scroll", maxHeight: "100%", height: "100%" }}>
        <DropdownItem>Salah eddine</DropdownItem>
        <DropdownItem>Mouadh baghdadi</DropdownItem>
        <DropdownItem>Mouadh baghdadi</DropdownItem>
        <DropdownItem>Mouadh baghdadi</DropdownItem>
        <DropdownItem>Mouadh baghdadi</DropdownItem>
        <DropdownItem>Mouadh baghdadi</DropdownItem>
        <DropdownItem>Mouadh baghdadi</DropdownItem>
        <DropdownItem>Mouadh baghdadi</DropdownItem>
        <DropdownItem>Mouadh baghdadi</DropdownItem>
        <DropdownItem>Mouadh baghdadi</DropdownItem>
        <DropdownItem>Hamdi</DropdownItem>
      </div>

    </div >
  );
};

 
export {MessagesDialog}