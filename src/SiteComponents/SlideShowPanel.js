import React from 'react';
import Slides from '../Components/Slides';
// images
import Img1 from '../Images/alien-with-aqualung.svg';
import Img2 from '../Images/death-star.svg';
import Img3 from '../Images/extraterrestial-head.svg';
import Img4 from '../Images/ufo-and-cow.svg';
import Img5 from '../Images/solar-system.svg';
import Icon from '../Images/big-ufo.svg';
import '../Styles/SlideShowPanel.css';

export default function SlideShowPanel(props){
  return(
    <div className='slideshow-panel'>
      <div className='icon'>
        <img src={Icon}/>
      </div>
      <Slides
        texts={[
          'Take Me Your Leader Co. Is a great way to experience a new Life. Sign up now!',
          'Many options this can be done but we prefer the easy way. So why not Sign Up!',
          'The face of the future is here! Find out how.',
          'We take pride in what we do with our latest technologies.',
          'With many locations already conquered why not join us!'
        ]}
        timer={8000}
        images={[Img1, Img2, Img3, Img4, Img5]}/>
    </div>
  )
}
