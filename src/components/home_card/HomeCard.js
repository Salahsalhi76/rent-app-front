import React from 'react'
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { RxRulerSquare } from 'react-icons/rx';
import Slider from '../swiper/slider';
import "./HomeCard.css";
 
function HomeCard(props) {
    return (
        <div className='homecard' >
               <img src={props.image} />
            <div className='content'>
                 <div className='price_container'>
                <h2>USD</h2>
                <h1>{props.price}</h1>
                <h3>Yearly</h3>
            </div>

            <div className='properties_container'>
                    <div className='property_container'>
                        <FaBed style={{ fontSize: "17px",color:"grey" }} />
                        <p>{props.nb_bed}</p>
                    </div>
                    <div className='property_container'>
                        <FaBath style={{ fontSize: "15px",color:"grey" }} />
                        <p>{props.nb_bath}</p>
                    </div>
                    <div className='property_container'>
                        <RxRulerSquare style={{ fontSize: "15px",color:"grey" }} />
                        <p>{props.sqft}</p>
                    </div>
                </div>

                <h5 style={{ "fontSize": "12px",fontWeight:"500", marginTop: "5px "}}>{props.type}</h5>
                
                <h4 style={{ "fontSize": "12px",color:"grey", marginTop: "5px", fontWeight: "400" }}>
                    {props.adresse}
                </h4>
               

            </div>
        </div>
    )
} export default HomeCard


/*
 <h4 style={{ "fontSize": "15px", fontWeight: "400", color: '#006169'}}>{props.title}</h4>
*/