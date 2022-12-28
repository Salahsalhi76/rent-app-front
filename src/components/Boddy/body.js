import React from 'react'
import './body.css';
import HomesGrid from './homes_grid.js';
import { MdOutlineVilla } from 'react-icons/md';
import SearchBar from './searchBar/searchBar';
import DropDownSalah from '../shared/dropdown';
import SettingsBar from './settinhBar/settingBar';

function Body() {
    const options = [
        'Popular', 'Newest', 'Old'
    ];
    const defaultOption = options[0];
    const value = options[0];

    

    return (
        <div className='body'>
            <SearchBar />

            <div className='divider'/>

            <div className='body_header'>
                <h1>Properties for rent in Algeria</h1>
            </div>


            <div className='body_content'>
                <ul >
                    <div className='body_min_header'>
                        <div className='furnish_type'>
                            <h1>Furnish Type:   </h1>

                            <div className='furnish_type_buttons_container'>
                                <button>All</button>
                                <button>Rent</button>
                                <button>Sell</button>
                                <button>Apartement</button>
                                <button>Villa</button>
                            </div>

                        </div>

                        <div className='order_by_container'>
                            <h1>Order by</h1>
                            <DropDownSalah items={options} value={value} defaultValue={defaultOption}/>

                        </div>

                    </div>
                    <HomesGrid />


                </ul>
                <div className="body_right_space">
                    <img src='https://www.marketingmind.in/wp-content/uploads/2019/12/5-lakhs-700x367.png' />

                    <button className='add_home_button'>
                        <MdOutlineVilla style={{ fontSize: "22px", paddingRight: '10px', alignSelf: 'center' }} />
                        <h2>Add home</h2>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Body

