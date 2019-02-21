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
      <TextInput
        title='FULL NAME'
        placeholder='Enter Your Full Name'/>
      <CheckBox
        onClick={props.onClick}
        isChecked={props.isChecked}
        text={<div style={{display: 'inline-block'}}>I agree <a href="">link</a></div>}/>
    </div>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isToggle: false,
      isChecked: false,
    }
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  toggleCheck(){
    console.log('clicked')
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    return (
      <div className="App">
        <TwoPanels
          firstPanel={<SlideShowPanel />}
          secPanel={
            <SigninPanel onClick={this.toggleCheck} isChecked={this.state.isChecked}/>}
        />
      </div>
    );
  }
}

export default App;
