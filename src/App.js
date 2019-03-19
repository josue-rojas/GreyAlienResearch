import React, { Component } from 'react';
import './Styles/App.css';
import TwoPanels from './Components/TwoPanels';
import SigninPanel from './SiteComponents/SigninPanel';
import SlideShowPanel from './SiteComponents/SlideShowPanel';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import firebase from './firebase';

function NotSignin(props){
  return(
    <div className="App">
      <TwoPanels
        firstPanel={<SlideShowPanel/>}
        secPanel={<SigninPanel firebase={firebase}/>}
      />
    </div>
  )
}

function Signin(props){
  return(
    'signin'
  )
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      isSignin: false,
      authObserver: null,
      initStart: true, // so it we can load things first
    }
    this.getInitComponent = this.getInitComponent.bind(this);
    this.getSigninComponent = this.getSigninComponent.bind(this);
    this.redirectComponent = this.redirectComponent.bind(this);
  }

  componentDidMount(){
    let thisWrapper = this;
    firebase.auth().onAuthStateChanged(function(user){
      thisWrapper.setState({
        user: user,
        isSignin: user != null,
      })
    })
  }

  componentWillUnmount(){
    this.state.authObserver();
  }

  getInitComponent(){
    return this.state.isSignin ? <Signin/>  : <Redirect
            to={{
              pathname: "/signin",
              state: { from: this.props.location }
            }}/>
  }

  getSigninComponent(){
    return !this.state.isSignin ? <NotSignin/> : <Redirect
            to={{
              pathname: '/',
              state: { from: this.props.location }
            }}/>
  }

  redirectComponent(){
    return(
      <Redirect to={{
        pathname: '/',
        state: { from: this.props.location }
      }}/>
    )
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/' exact component={this.getInitComponent}/>
          <Route path="/(signup|signin)/"  exact component={this.getSigninComponent}/>
          <Route component={this.redirectComponent} />
        </Switch>
      </Router>
    );
  }
}
