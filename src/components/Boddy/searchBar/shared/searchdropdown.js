import React from 'react'
import "./searchdropdown.css";



function SearchDropDown(props) {
    const items = props.items;
    const value = props.value;
    const defaultValue = props.defaultValue;

    return (
        <select value={value} onChange={props.onChange} className='searchdropdown'>

            <option hidden>{defaultValue}</option>
            {
                items.map(data => {
                    return (
                        <option key={data} value={data}  >
                            {data}
                        </option>
                    );
                })
            }

        </select >
    );
}








export   default SearchDropDown;
 
