import React from 'react';
import '../Styles/Buttons.css';

export default function Button(props){
  return(
    <div
      className='rg button'
      onClick={props.onClick}>
      {props.text}
    </div>
  )
}

export function ToggleButton(props){
  return(
    <div
      className={`tgl button ${props.isToggle ? 'on' : 'off'}`}
      onClick={props.onClick}>
      <div className='f-state text'>{props.firstText}</div>
      <div className='s-state text'>{props.secText}</div>
    </div>
  )
}
