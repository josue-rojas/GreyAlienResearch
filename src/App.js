import React, { Component } from 'react';
import './Styles/App.css';
import TwoPanels from './Components/TwoPanels';
import Button, { ToggleButton } from './Components/Buttons';
import { TextInput, CheckBox } from './Components/Inputs';
import SigninPanel from './SiteComponents/SigninPanel';
import Slides from './Components/Slides';
// images
import Img1 from './Images/alien-with-aqualung.svg';
import Img2 from './Images/death-star.svg';
import Img3 from './Images/extraterrestial-head.svg';
import Img4 from './Images/ufo-and-cow.svg';

function SlideShowPanel(props){
  return(
    <div className='slideshow-panel'>
      <Slides
        texts={[
          'Take Me Your Leader Co. Is a great way to experience a new Life. Sign up now!',
          'Many options this can be done but we prefer the easy way. So why not Sign Up!',
          'The face of the future is here! Find out how.',
          'We take pride in what we do with our latest technologies.'
        ]}
        timer={8000}
        images={[Img1, Img2, Img3, Img4]}/>
    </div>
  )
}


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <TwoPanels
          firstPanel={<SlideShowPanel />}
          secPanel={<SigninPanel/>}
        />
      </div>
    );
  }
}

export default App;
