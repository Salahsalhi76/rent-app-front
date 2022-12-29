import React from 'react'
import HomesGrid from './homes_grid.js';
import { MdOutlineVilla } from 'react-icons/md';
import SearchBar from './searchBar/searchBar';
import DropDownSalah from '../shared/dropdown';
import './body.css';

function Body(props) {
    const options = [
        'Popular', 'Newest', 'Old'
    ];
    const defaultOption = options[0];
    const value = options[0];



    return (
        <div className='body'>
            <SearchBar />

            <div className='divider' />



            <div className='body_content'>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className='body_header'>
                        <h1>Properties for rent in Algeria</h1>
                        <div className='order_by_container'>
                            <h1>Order by</h1>
                            <DropDownSalah items={options} value={value} defaultValue={defaultOption} />
                        </div>
                    </div>

                    <HomesGrid />
                </div>

                <RightSpace onAddHome={props.onAddHome}/>
            </div>
        </div>
    )
}

export default Body

const RightSpace = (props) => {
    
   return (
    <div className="body_right_space">
        <img src='https://www.marketingmind.in/wp-content/uploads/2019/12/5-lakhs-700x367.png' />

        <button className='add_home_button' onClick={props.onAddHome}>
            <MdOutlineVilla style={{ fontSize: "22px", paddingRight: '10px', alignSelf: 'center' }} />
            <h2>Add home</h2>
        </button>
    </div>
   );
}

