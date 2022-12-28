import React from 'react'
import './Header.css';
import Button from "./Button.js";
import { MdFavoriteBorder } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";


function Header() {
  return (
    <div className='header'>

      <img src="https://w7.pngwing.com/pngs/332/882/png-transparent-logo-brand-font-product-design-evening-standard-logo-angle-text-logo.png"/>

       <div className='buttons_container'>
       <Button title="Log  in" icon={<BiUserCircle style={{alignSelf:"center","marginRight":'5px',"fontSize":"15px"}}/>}/>
       <Button title="Favorits" icon={<MdFavoriteBorder style={{alignSelf:"center","marginRight":'5px',"fontSize":"15px"}}/>}/>
       </div>

      
  
    </div>
  )
}

export default Header
