import React from 'react';
import Slides from '../Components/Slides';
// images
import Img1 from '../Images/alien-with-aqualung.svg';
import Img2 from '../Images/death-star.svg';
import Img3 from '../Images/extraterrestial-head.svg';
import Img4 from '../Images/ufo-and-cow.svg';
import Img5 from '../Images/solar-system.svg';
import Logo from './Logo';
import '../Styles/SlideShowPanel.css';

export default function SlideShowPanel(props){
  return(
    <div className='slideshow-panel panel-content'>
      <Logo/>
      <Slides
        texts={[
          'Grey Alien Reasearch .co is a great way to experience a new Life. Sign up now!',
          'Many options this takeover can be done but we prefer the easy way. So why not Sign Up!',
          'The face of your future overloard is here! Sign Up Now!',
          'We take pride in what we do with our latest technologies it is breeze.',
          'With many locations already conquered why not join us and save us the trouble!'
        ]}
        timer={8000}
        images={[Img1, Img2, Img3, Img4, Img5]}/>
    </div>
  )
}
