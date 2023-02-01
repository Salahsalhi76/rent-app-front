
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";
import './settingBar.css';

function SettingsBar() {
    let navigate = useNavigate();
    const location = useLocation();

    const [open, setOpen] = useState(false);

    return (
        <div className='settings_bar'>
            <Link to='/'>
                <img src='http://nebula.wsimg.com/1075011f1b60946f39dc0e08e0089a09?AccessKeyId=D95F1C1B59CF5D234CD1&disposition=0&alloworigin=1' />
            </Link>

            <div className='settings_bar_content'>
                <button onClick={() => {

                    const tmp = location.pathname;
                    const path = (tmp === "/" || tmp === "/messages") ? "/" : "/home/";

                    if (open) {
                        navigate(path);
                    } else {
                        navigate(`${path}messages`);
                    }
                    setOpen(!open);
                }}>My messages</button>
                <button 
                onClick={()=>{
                    navigate("/my_offers")
                }}
                >My offers</button>
            </div>
        </div>
    )
}

export default SettingsBar
