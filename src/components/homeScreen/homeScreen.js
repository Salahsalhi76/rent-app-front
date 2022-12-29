import React from 'react'
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { BiMap, BiBuildingHouse } from 'react-icons/bi';
import { RxRulerSquare } from 'react-icons/rx';
import { IoIosArrowForward } from 'react-icons/io';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import "./homeScreen.css";


function HomeScreen(props) {
  return (
    <div className='homescreen'>

      <div className='image_details'>
       <MyGallery />
        <div className='price_container'>
          <h2>USD</h2>
          <h1>{props.price}</h1>
          <h3>Yearly</h3>
        </div>

        <div className='adresse_row'>
          <h4 style={{ "fontSize": "16px", marginTop: "10px", fontWeight: "600" }}>
            {props.adresse}
          </h4>

          <button>
            <h2>view on map</h2>
            <BiMap style={{ fontSize: "20px", marginLeft: '5px' }} />
          </button>
        </div>

        <div className='properties_container'>
          <div className='property_container'>
            <FaBed style={{ fontSize: "20px" }} />
            <p>{props.nb_bed} Beds</p>
          </div>
          <div className='property_container'>
            <FaBath style={{ fontSize: "20px" }} />
            <p>{props.nb_bath} Baths</p>
          </div>
          <div className='property_container'>
            <RxRulerSquare style={{ fontSize: "20px" }} />
            <p>{props.sqft} sqft</p>
          </div>
        </div>


        <h4 style={{ "fontSize": "16px", marginTop: "18px", fontWeight: "600" }}>
          {props.title}
        </h4>

        <h4 style={{ "fontSize": "15px", marginTop: "18px", fontWeight: "300", wordSpacing: "0.1px", lineHeight: "160%" }}>
          {props.description}
        </h4>


        <h1 style={{ marginTop: '15px', fontSize: "22px", fontWeight: "500", color: "#006169" }}>Property Information</h1>
        <div className='properity_information'>
          <h2>Type</h2>
          <h1>Apartment</h1>
          <h2>Furnishing</h2>
          <h1>Unfurnished</h1>
        </div>
        <div className='divider' />



        <div className='properity_information'>
          <h2>Purpose</h2>
          <h1>For Rent</h1>
          <h2>Added on</h2>
          <h1>16 October 2022</h1>
        </div>
        <div className='divider' />

        <div className='properity_information'>
          <h2>Wilaya</h2>
          <h1>alger</h1>
          <h2>Commune</h2>
          <h1>baraki</h1>
        </div>
        <div className='divider' />

      </div>

      <UserInfo title={props.title} />


    </div>
  )
}

export default HomeScreen


const UserInfo = (props) => {

  return (
    <div className='ownerinfo'>
      <div className='owner_card'>
        <img src='https://media.licdn.com/dms/image/D4E03AQEgqUpiDA7Ldg/profile-displayphoto-shrink_400_400/0/1670507548841?e=1677715200&v=beta&t=xl5QL-AdavT8YXQKMjPjxkqGT38dDKwQ_9f44aDlHJI' />
        <div style={{ alignSelf: "center", alignContent: 'center' }}>
          <h2>Listing by</h2>
          <h2 style={{ color: '#006169', fontWeight: '550' }}>Salah eddine salhi</h2>

          <div style={{ display: "flex", flexDirection: "row", marginTop: '5px' }}>
            <BiBuildingHouse style={{ fontSize: "18px", selfAlign: "center", marginRight: "5px" }} />
            <h2 style={{ fontSize: "14px", alignSelf: "center", fontWeight: '550' }}>10</h2>
            <h2 style={{ fontSize: "12px", alignSelf: "center" }}>Listing</h2>
            <h2>.</h2>
            <button>
              <h2>View all</h2>
              <IoIosArrowForward />
            </button>
          </div>

        </div>

      </div>

      <h2 style={{ fontSize: '13px', fontWeight: "600", alignSelf: "center", marginTop: '20px' }}>Contact Agent for more information.</h2>

      <textarea type="textarea" placeholder="message" rows={5}   cols={5} aria-label='hhh' value={`I would like to inquire about your property - ${props.title}`} />

      <button className='email_button'>SEND MESSAGE</button>

    </div>
  );
}


const images = [
  {
    original: 'https://images.bayut.com/thumbnails/295777282-800x600.webp',
    thumbnail: 'https://images.bayut.com/thumbnails/295777282-800x600.webp',
  },
  {
    original: 'https://images.bayut.com/thumbnails/295777283-800x600.webp',
    thumbnail: 'https://images.bayut.com/thumbnails/295777283-800x600.webp',
  },
  {
    original: 'https://images.bayut.com/thumbnails/295777285-800x600.webp',
    thumbnail: "https://images.bayut.com/thumbnails/295777285-800x600.webp",
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} style={{
      height: "100%",
      width: "100%",
      marginBottom: "15px",
      borderRadius: "10px"
    }}/>;
  }
}