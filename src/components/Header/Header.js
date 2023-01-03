import { MdFavoriteBorder } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { GiAlgeria } from "react-icons/gi";
import SettingsBar from '../Boddy/settinhBar/settingBar';
import './Header.css';

function Header() {
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



        <div className='buttons_container'>
          <Button title="Log  in" icon={<BiUserCircle style={{ alignSelf: "center", "marginRight": '5px', "fontSize": "15px" }} />} />
          <Button title="Favorits" icon={<MdFavoriteBorder style={{ alignSelf: "center", "marginRight": '5px', "fontSize": "15px" }} />} />
        </div>



      </div>
      <div className='divider' />
      <SettingsBar />

    </div>

    </>


  )
}

export default Header;


function Button(props) {
  return (
    <button className='button_header'>
      {props.icon}
      <h2 style={{fontSize:"14px",alignSelf:"center"}}>{props.title}</h2>
    </button>
  )
}



