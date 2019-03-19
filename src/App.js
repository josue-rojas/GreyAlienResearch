import React, { Component } from 'react';
import './Styles/App.css';
import TwoPanels from './Components/TwoPanels';
import SigninPanel from './SiteComponents/SigninPanel';
import SlideShowPanel from './SiteComponents/SlideShowPanel';
import { BrowserRouter as Router } from "react-router-dom";

function Home(props){
  return(
    <div className="App">
      <TwoPanels
        firstPanel={<SlideShowPanel />}
        secPanel={<SigninPanel/>}
      />
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Home/>
      </Router>
    );
  }
}
