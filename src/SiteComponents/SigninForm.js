import React from 'react';
import { TextInput } from '../Components/Inputs';
import Button from '../Components/Buttons';
import { Link } from "react-router-dom";


export default class SigninForm extends React.Component {
  constructor(props){
    super(props);
  }

  signin(){
    return console.log('signin');
  }

  render(){
    return (
      <form>
        <TextInput
          type='email'
          title='E-MAIL'
          placeholder='Enter your e-mail'
          onChange={()=>console.log('change')}/>
        <TextInput
          type='password'
          title='PASSWORD'
          placeholder='Enter your password'
          onChange={()=>console.log('paswword change')}/>
        <Button
          text='Sign In'
          onClick={this.singin}/>
        <div className='extra-link'>
          <Link to='/signup'>
            Not a member?
          </Link>
        </div>
      </form>
    );
  }
}
