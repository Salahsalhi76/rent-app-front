
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './settingBar.css';

function SettingsBar() {
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <div className='settings_bar'>
            <Link to='/'>
                 <img  src='http://nebula.wsimg.com/1075011f1b60946f39dc0e08e0089a09?AccessKeyId=D95F1C1B59CF5D234CD1&disposition=0&alloworigin=1' />
            </Link>

            <div className='settings_bar_content'>
                <li className="nav-item">
                    <button onClick={() => {
                        if (open) {
                            navigate('/');
                        } else {
                            navigate('/messages');
                        }
                        setOpen(!open);
                    }}>My messages</button>

                </li>

                <button>My offers</button>
                <button>Top 10 offers</button>
                <button>Most viewed</button>
            </div>
        </div>
    )
}

export default SettingsBar
