import HomesGrid from './homes_grid.js';
import { MdOutlineVilla } from 'react-icons/md';
import SearchBar from './searchBar/searchBar';
import DropDownSalah from '../shared/dropdown';
import { useNavigate, Outlet ,Navigate} from "react-router-dom";
import LoadingWidget from '../loading/loading.js';
import './body.css';
import SettingsBar from './settinhBar/settingBar.js';
import { isAuthenticated_controller } from '../../controllers/auth_controller.js';
import { useState } from 'react';
import { useEffect } from 'react';


function Body(props) {

    const options = [
        'Popular', 'Newest', 'Old'
    ];
    const defaultOption = options[0];
    const value = options[0];



    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
          if(isAuthenticated_controller()){
            setIsAuthenticated(true);
          }
      }, []);

      
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    

    return (
        <>
            <div className='body'>
                <SettingsBar />
                <SearchBar />
                <div className='divider' />


                <div className='body_content'>


                    <div className='homes_body'>
                        <div className='body_header'>
                            <h1>Properties for rent in Algeria</h1>
                            <div className='order_by_container'>
                                <h1>Order by</h1>
                                <DropDownSalah items={options} value={value} defaultValue={defaultOption} />
                            </div>
                        </div>

                        {props.loading && <LoadingWidget />}
                        {!props.loading && <HomesGrid homes={props.homes} />}



                    </div>

                    <RightSpace />
                </div>

                <Outlet />
            </div>

        </>

    )
}

export default Body

const RightSpace = (props) => {
    let navigate = useNavigate();

    return (
        <div className="body_right_space">
            <img src='https://www.marketingmind.in/wp-content/uploads/2019/12/5-lakhs-700x367.png' />

            <button className='add_home_button' onClick={() => {
                /*props.onAddHome */
                let path = "/addHome";
                navigate(path);
            }}>
                <MdOutlineVilla style={{ fontSize: "22px", paddingRight: '10px', alignSelf: 'center' }} />
                <h2>Add home</h2>
            </button>
        </div>
    );
}

