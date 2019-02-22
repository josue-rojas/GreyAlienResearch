import React from 'react';
import '../Styles/TwoPanels.css';

// just two panels...
export default function TwoPanels(props){
  return(
    <div className='two-panels'>
      <div className='first-panel panel'>
        {props.firstPanel}
      </div>
      <div className='sec-panel panel'>
        {props.secPanel}
      </div>
    </div>
  )
}
