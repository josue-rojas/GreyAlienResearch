import React, { Component } from 'react';
import './Styles/App.css';
import TwoPanels from './Components/TwoPanels';
import Button, { ToggleButton } from './Components/Buttons';
import { TextInput, CheckBox } from './Components/Inputs';

function SlideShowPanel(props){
  return(
    <div className='slideshow-panel'>
    </div>
  )
}

function SigninPanel(props){
  return(
    <div className='signin-panel'>
      Panel
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
