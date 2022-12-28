import React from 'react'
import "./dropdown.css";

function DropDownSalah(props) {
    const {items, value,defaultValue} = props;

    return (
        <select value={value} onChange={() => { }} className='ddown's>

            <option hidden>{defaultValue}</option>
            {
                items.map(data => {
                    return (
                        <option key={data} value={data} style={{}} >
                            {data}
                        </option>
                    );
                })
            }

        </select >
    );
}

export default DropDownSalah
