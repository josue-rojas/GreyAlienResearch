import React from 'react';
import { TextInput } from '../Components/Inputs';
import Button from '../Components/Buttons';
import { Link } from "react-router-dom";
import { hasInput, emailCheck } from '../Helpers/InputsCheck';
import { checkAllInputs, handleOnChange } from '../Helpers/InputFunctions';


export default class SigninForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: {
        val: '',
        hasError: false,
      },
      password: {
        val: '',
        hasError: false,
      },
    };
    this.checkInput = {
			email: emailCheck,
      password: hasInput,
		};
    this.signin = this.signin.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  signin(){
    let valuesChange = checkAllInputs(this.checkInput, this.state);
    if(valuesChange){
      this.setState(valuesChange);
      return false;
    }
    this.props.firebase.auth()
      .signInWithEmailAndPassword(this.state.email.val, this.state.password.val)
      .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  onInputChange(e, inputKey){
    let inputState = handleOnChange(e, inputKey, this.state, this.checkInput);
    this.setState({
      [inputKey]: inputState
    });
  }

  render(){
    return (
      <form>
        <TextInput
          type='email'
          title='E-MAIL'
          placeholder='Enter your e-mail'
          val={this.state.email.val}
          hasError={this.state.email.hasError}
          onChange={(e) => this.onInputChange(e, 'email')}/>
        <TextInput
          type='password'
          title='PASSWORD'
          placeholder='Enter your password'
          val={this.state.password.val}
          hasError={this.state.password.hasError}
          onChange={(e) => this.onInputChange(e, 'password')}/>
        <Button
          text='Sign In'
          onClick={this.signin}/>
        <div className='extra-link'>
          <Link to='/signup'>
            Not a member?
          </Link>
        </div>
      </form>
    );
  }
}
