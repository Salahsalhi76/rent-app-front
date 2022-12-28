
import React from 'react'
import './settingBar.css';

function SettingsBar() {
    return (
        <div className='settings_bar'>
            <img src='https://w7.pngwing.com/pngs/332/882/png-transparent-logo-brand-font-product-design-evening-standard-logo-angle-text-logo.png' />

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
