import React from 'react';
import Button, { ToggleButton } from '../Components/Buttons';
import { CheckBox, TextInput } from '../Components/Inputs';
import '../Styles/SigninPanel.css';

export default class SigninPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMember: false,
      name: '',
      password: '',
      email: '',
      checkbox: false,
    }
    this.changeInput = this.changeInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeInput(e){

  }

  submitForm(){
    console.log('clicked')
  }

  render(){
    return(
      <div className='signin-panel'>
        <div className='toggle-wrapper'>
          <ToggleButton
            onClick={()=>this.setState({isMember: !this.state.isMember})}
            isToggle={this.state.isMember}
            firstText='Sign In'
            secText='Sign Up'/>
        </div>
        <div className='form-wrapper'>
          <div className='title'>
            <a href='#signin' className={this.state.isMember ? '' : 'notactive'}>Sign In</a>
             <span className='shadow-text'> &nbsp;Or&nbsp;&nbsp; </span>
            <a href='#signup' className={this.state.isMember ? 'notactive' : ''}>Sign Up</a>
          </div>
          <form>
            <TextInput
              title='FULL NAME'
              placeholder='Enter your full name'
              onChange={()=>console.log('dhs')}/>
            <TextInput
              title='PASSWORD'
              placeholder='Enter a password'
              onChange={()=>console.log('dhs')}/>
            <TextInput
              title='E-MAIL'
              placeholder='Enter your e-mail'
              onChange={()=>console.log('dhs')}/>
            <CheckBox
              isChecked={this.state.checkbox}
              onClick={()=>this.setState({ checkbox: !this.state.checkbox })}
              text={<div className='checkbox-text'><span>I agree all statements in <a href=''>terms and services</a></span></div>}/>
            <Button
              text='Sign Up'
              onClick={this.submitForm}/>
            <div className='extra-link'>
              <a href='#'>
                I'm already a member
              </a>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
