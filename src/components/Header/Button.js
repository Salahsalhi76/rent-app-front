import React from 'react'
import "./Button.css";
import { FaBeer } from 'react-icons/fa';

function Button(props) {
  return (
    <button className='Button'>
        {props.icon}
        <h2>{props.title}</h2>
    </button>
  )
}

export default Button;
