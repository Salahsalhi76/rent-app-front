import "./searchdropdown.css";



function SearchDropDown(props) {
    const items = props.items;
    const value = props.value;
    const defaultValue = props.defaultValue;

    const style = props.width===undefined? {} : {width:"100%"};

    return (
        <select value={value} onChange={props.onChange} className='searchdropdown' style={style}>

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
 
