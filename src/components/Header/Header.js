import React from 'react'
import './Header.css';
import Button from "./Button.js";
import { MdFavoriteBorder } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import SettingsBar from '../Boddy/settinhBar/settingBar';


function Header() {
  return (
    <>
      <div className='header'>

        <img src="" />

        <div className='buttons_container'>
          <Button title="Log  in" icon={<BiUserCircle style={{ alignSelf: "center", "marginRight": '5px', "fontSize": "15px" }} />} />
          <Button title="Favorits" icon={<MdFavoriteBorder style={{ alignSelf: "center", "marginRight": '5px', "fontSize": "15px" }} />} />
        </div>



      </div>
      <SettingsBar />
      <div className='divider'/>

    </>


  )
}

export default Header
