import React from 'react';
import Button from '../Components/Buttons';
import { CheckBox, TextInput } from '../Components/Inputs';
import { Link } from "react-router-dom";

export default class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
      <form>
        <TextInput
          title='FULL NAME'
          placeholder='Enter your full name'
          onChange={()=>console.log('dhs')}/>
        <TextInput
          type='password'
          title='PASSWORD'
          placeholder='Enter a password'
          onChange={()=>console.log('dhs')}/>
        <TextInput
          type='email'
          title='E-MAIL'
          placeholder='Enter your e-mail'
          onChange={()=>console.log('dhs')}/>
        <CheckBox
          isChecked={this.state.checkbox}
          onClick={()=>this.setState({ checkbox: !this.state.checkbox })}
          text={<div className='checkbox-text'><span>I agree all statements in <a href='/'>terms and services</a></span></div>}/>
        <Button
          text='Sign Up'
          onClick={this.submitForm}/>
        <div className='extra-link'>
          <Link to='/signin'>
            I'm already a member
          </Link>
        </div>
      </form>
    );
  }
}
