import { useState } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { getMe, isAuthenticated_controller } from '../../controllers/auth_controller.js';
import { getHomes } from '../../controllers/homes_controller.js';
import { RightSpace } from '../Boddy/body.js';
import HomesGrid from '../Boddy/homes_grid';
import LoadingWidget from '../loading/loading';
import DropDownSalah from '../shared/dropdown';



export default function MyOffers(props) {

    let [loading, setLoading] = useState(false);
    let [homes, setHomes] = useState([]);
  
    useEffect(() => {
      getHomes().then(data => {
        console.log(data);
        setHomes(data);
        setLoading(false);
      });
  
    }, []);
  
      
    if (!isAuthenticated_controller()) {
        return <Navigate to="/login" />;
      }
  
      
  
    return (

        <div style={{padding:"100px"}}>
            <div className='body_content' >


                <div className='homes_body'>
                    <div className='body_header' style={{ margin: '25px' }}>
                        <h1>{getMe().name}'s offers</h1>

                    </div>

                    {props.loading && <LoadingWidget />}
                    {!props.loading && <HomesGrid homes={props.homes} />}



                </div>

                <RightSpace />
            </div>
        </div>


    )
}

/*
{props.loading && <LoadingWidget />}
        {!props.loading && <HomesGrid homes={props.homes} />}
*/