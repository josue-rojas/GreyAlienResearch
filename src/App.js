import React, { Component } from 'react';
import './Styles/App.css';
import TwoPanels from './Components/TwoPanels';
import SigninPanel from './SiteComponents/SigninPanel';
import SlideShowPanel from './SiteComponents/SlideShowPanel';


export default class App extends Component {
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
