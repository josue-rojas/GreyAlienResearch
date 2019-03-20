import React from 'react';
import { withRouter } from "react-router-dom";
import TwoPanels from '../Components/TwoPanels';
import SlideShowPanel from './SlideShowPanel';
import SigninPanel from './SigninPanel';
import firebase from '../firebase';

// handles loading, main page, and slideshow/sign in page all withing the two-panel component
class TwoPanelMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      isSignin: false,
      authObserver: null,
      initStart: true, // for loading screen
    }
    this.getFPanel = this.getFPanel.bind(this);
    this.getSPanel = this.getSPanel.bind(this);
  }

  componentDidMount(){
    let thisWrapper = this;
    firebase.auth().onAuthStateChanged(function(user){
      thisWrapper.setState({
        user: user,
        isSignin: user !== null,
        initStart: false
      })
      console.log('pathname', thisWrapper.props.location.pathname);
      if(user === null && thisWrapper.props.location.pathname === '/'){
        thisWrapper.props.history.push('/signin');
      }
      else if(user){
        thisWrapper.props.history.push('/');
      }
    })
  }

  componentWillUnmount(){
    this.state.authObserver();
  }

  getFPanel(){
    if(this.state.initStart){
      // loading screeen
      return (<div className='slideshow-panel panel-content'>LOADING...</div>)
    }
    else if(this.props.location.pathname === '/') {
      return (<div className='slideshow-panel panel-content'>Not loading...</div>)
    }
    else return <SlideShowPanel/>
  }

  getSPanel(){
    if(this.props.location.pathname === '/') return (<div className='signin-panel panel-content'></div>);
    else return (<SigninPanel firebase={firebase}/>)
  }

  render(){
    return(
      <div className="App">
        <TwoPanels
          className={this.state.user || this.state.initStart ? 'fActive' : ''}
          firstPanel={this.getFPanel()}
          secPanel={this.getSPanel()}
        />
      </div>
    )
  }
}

export default withRouter(TwoPanelMain);
