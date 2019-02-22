import React, { Component } from 'react';
import './Styles/App.css';
import TwoPanels from './Components/TwoPanels';
import Button, { ToggleButton } from './Components/Buttons';
import { TextInput, CheckBox } from './Components/Inputs';
import SigninPanel from './SiteComponents/SigninPanel';
import SlideShowPanel from './SiteComponents/SlideShowPanel';


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
