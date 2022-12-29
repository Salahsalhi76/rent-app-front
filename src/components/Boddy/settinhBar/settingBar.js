
import React from 'react'
import './settingBar.css';

function SettingsBar() {
    return (
        <div className='settings_bar'>
            <img src='http://nebula.wsimg.com/1075011f1b60946f39dc0e08e0089a09?AccessKeyId=D95F1C1B59CF5D234CD1&disposition=0&alloworigin=1' />

            <div className='settings_bar_content'>
                <button>My messages</button>
                <button>My offers</button>
                <button>Top 10 offers</button>
                <button>Most viewed</button>
            </div>
        </div>
    )
}

export default SettingsBar
