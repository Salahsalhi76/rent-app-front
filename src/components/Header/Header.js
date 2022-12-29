import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { GiAlgeria } from "react-icons/gi";
import SettingsBar from '../Boddy/settinhBar/settingBar';
import './Header.css';


function Header() {
  return (
    <>
      <div className='header'>

        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <GiAlgeria style={{color:"#006169",marginLeft:'10px',marginRight:'5px'}}/>
        <h2 style={{fontSize:"15px",color:"#006169"}}>Algeria</h2>
        </div>

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

export default Header;


function Button(props) {
  return (
    <button className='Button'>
        {props.icon}
        <h2>{props.title}</h2>
    </button>
  )
}