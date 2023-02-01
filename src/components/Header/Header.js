import { MdFavoriteBorder } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { GiAlgeria } from "react-icons/gi";
import { getMe, logOut } from "../../controllers/auth_controller.js"
import SettingsBar from '../Boddy/settinhBar/settingBar';
import './Header.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header(props) {

  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);


  return (
    <>
      <div style={{
        position: "fixed",
        width: "100%",
        "box-shadow": "rgba(0, 0, 0, 0.07) 0px 25px 50px -12px",
        "z-index": "100"
      }}>
        <div className='header'>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <GiAlgeria style={{ color: "#006169", marginLeft: '10px', marginRight: '5px' }} />
            <h2 style={{ fontSize: "15px", color: "#006169" }}>Algeria</h2>
          </div>



 


         

            <div className="logout-button">
                 <img src={getMe().image} alt="Profile"
              onClick={() => setShowDropdown(!showDropdown)}
              style={{
                width: "35px",
                height: "35px",
                overflow: "hidden",
                borderRadius: "50%"
              }}
            />
              {showDropdown && (
                <ul className="dropdownnn">
                  <li onClick={() => {
                    logOut();
                    props.onLogOut();
                    navigate("/login");
                    
                  }}>Logout</li>
                </ul>
              )}
            </div>
          



        </div>

      </div>

    </>


  )
}

export default Header;


function Button(props) {
  return (
    <button className='button_header'>
      {props.icon}
      <h2 style={{ fontSize: "14px", alignSelf: "center" }}>{props.title}</h2>
    </button>
  )
}



