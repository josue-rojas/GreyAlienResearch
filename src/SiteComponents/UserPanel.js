import React from 'react';
import Button from '../Components/Buttons';
import ProgressBar from '../Components/ProgressBar';
import { SocialIconLink } from '../Components/SocialIcon';
import { withRouter } from "react-router-dom";
import '../Styles/UserPanel.css';

// goal of users to reach
const goals = [10, 100, 500, 10000];

function ShareBar(props){
  const thisUrl = encodeURI(window.location.href);
  const message = encodeURI(`Join in helping Grey Alien Research reach their goal for W0rld Domination!\n Sign up now at ${thisUrl}`);
  const whatsapp_share = `https://wa.me/?text=${message}`;
  const facebook_share = `https://www.facebook.com/sharer/sharer.php?u=${thisUrl}`;
  const twitter_share = `https://twitter.com/home?status=${message}`;

  return(
    <div className='share-bar'>
      <SocialIconLink
        target='_blank'
        type='whatsapp'
        href={whatsapp_share}/>
      <SocialIconLink
        target='_blank'
        type='facebook'
        href={facebook_share}/>
      <SocialIconLink
        target='_blank'
        type='twitter'
        href={twitter_share}/>
    </div>
  )
}

// one of the props include the user so we won't have to send another request
class UserPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      totalUsers: 0,
      progress: 0,
      goal: 0,
    }
    this.signout = this.signout.bind(this);
    this.getPercent =  this.getPercent.bind(this);
  }

  componentDidMount(){
    // try to avoid if somehow user is not sign in and access this page
    // redirect to signin
    if(!this.props.user){
      this.props.history.push('/signin');
      return;
    }
    this.props.firebase.database()
      .ref('count')
      .once('value')
      .then((dataSnapshot)=>{
        const total = dataSnapshot.val();
        // this.setState(this.setProgress(total || 0));
        this.setState({ totalUsers: total || 0 });
      });
  }

  signout(){
    this.props.firebase.auth()
      .signOut()
      .then(()=> console.log('Sign Out'))
      .catch((error)=> console.log('error signout', error))
  }

  getPercent(userCount){
    for(let i = 0; i < goals.length; i++){
      if(userCount < goals[i])
        return {progress: Math.round(userCount/goals[i]*100), goal: goals[i]};
    }
    return {progress: 100, goal: goals[goals.length-1]};
  }

  render() {
    // user shouls be
    if(!this.props.user) return '...'
    let { progress, goal } = this.getPercent(this.state.totalUsers);
    return(
      <div className='user-panel panel-content'>
        <div className='content-wrapper'>
          <div className='avatar-wrapper'>
            <img src={`http://identicon-1132.appspot.com/${encodeURI(this.props.user.displayName|| '')}`} alt='avatar'/>
          </div>
          <div className='welcome-message'>
            <span className='title'>Welcome {this.props.user.displayName || ''}!</span>
            <p>We at Grey <span className='bold'>Alien Research .co</span> apprecieate your cooperation.</p>
          </div>
          <div className='progress-message'>
            <ProgressBar progress={progress} className='progress'/>
            <span className='small-text'>We have reached {progress}% of our goal to {goal} Volunteers</span>
            <div className='share'>
              <p>
                Share with other humans to help reach our goal!
              </p>
              <p className='reg-text'>
                With your help we take one step closer to Grey Alien W0rld Domination!
              </p>
              <ShareBar/>
            </div>
          </div>
        </div>
        <div className='button-wrapper' id='#signout'>
          <Button
            className='inverse'
            onClick={this.signout}
            text='Sign Out'/>
        </div>
      </div>
    )
  }
}

export default withRouter(UserPanel);
