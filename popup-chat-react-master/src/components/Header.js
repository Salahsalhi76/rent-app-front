import React from 'react';
import closeIcon from './../assets/close-icon.png';

function Header(props) {
  return (
    <div className="sc-header">
      <img className="sc-header--img" src={props.imageUrl} alt="" />
      <div className="sc-header--team-name"> {props.teamName} </div>
      <div className="sc-header--close-button" onClick={props.onClose}>
        <img src={closeIcon} alt="" />
      </div>
    </div>
  );
}

export default Header;
