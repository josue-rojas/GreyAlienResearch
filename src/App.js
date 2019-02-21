import React, { Component } from 'react';
import './Styles/App.css';
import Button, { ToggleButton } from './Components/Buttons';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false,
    }
  }
  render() {
    return (
      <div className="App">
        <Button
          onClick={()=>console.log('clicked')}
          text='Sign Up'/>
        <ToggleButton
          onClick={()=>this.setState({toggle: !this.state.toggle})}
          firstText='Sign In'
          secText='Sign Up'
          isToggle={this.state.toggle}/>
      </div>
    );
  }
}

export default App;
