import React, { Component } from 'react'; 
import {
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  StyleSheet
} from 'react-native';
import styled from 'styled-components/native';
import startTabs from '../MainTabs/startMainTabs';
import StyledInput from '../../components/UI/StyledInput'
import {Title, Normal} from '../../components/UI/TextStyles'
import StyledButton from '../../components/UI/StyledButton'
import backgroundImage from '../../assets/topo_hack.png';
import validate from '../../utility/validation'


class AuthScreen extends Component {
  state = {
    controls:{
      email: {
        value: '',
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      confirmPassword: {
        value: '',
        valid: false,
        validationRules: {
          minLength: 6,
        }
      },
      confirmPassword: {
        value: '',
        valid: false,
        validationRules: {
          equalTo: 'password'
        }
      },
    }
  }
  loginHandler = () => { 
    startTabs();
  }
  updateInputState = (key, value) => {
    console.log(this.state)
    let connectedValues = {}; 
    if(this.state.controls[key].validationRules.equalTo){
      const equalControl = this.state.controls[key].validationRules.equalTo
      const equalValue = this.state.controls[equalControl].value
      connectedValue = {
        ...connectedValue, 
        equalTo: equalControl
      }
    }
    this.setState({
      controls:{
        ...prevState.controls, 
        [key]: {
          ...prevState.controls[key],
          value: value, 
          valid: validate(value, prevState.controls[key].validationRules), 
        }
      }
    })
  }
  render(){
    return (
      <BackgroundImage 
        // source={backgroundImage}
      >
        <LoginContainer>
          <Title>Logddddin </Title>
          <StyledInput 
            placeholder="Email" 
            label="Welcome to the Send Train"
            value={this.state.controls.email}
            onChangeText={(val) => this.updateInputState('email', val)}
          />
          <StyledInput placeholder="Password" />
          <StyledButton 
            primary
            onPress={this.loginHandler}
            value={this.state.controls.password}
            onChangeText={(val) => this.updateInputState('password', val)}
          >
            Login
          </StyledButton>
          {/* <Button title="Login" onPress={this.loginHandler}/> */}
          <Title>Sign Up!</Title>
          <StyledInput 
            placeholder="Email"
            value={this.state.controls.email}
            onChangeText={(val) => this.updateInputState('email', val)} 
          />
          <StyledInput 
            placeholder="Password"
            value={this.state.controls.password}
            onChangeText={(val) => this.updateInputState('password', val)}
          />
          <StyledInput 
            placeholder="Confirm Password"
            value={this.state.controls.password} 
            onChangeText={(val) => this.updateInputState('confirmPassword', val)}
          /> 
          <StyledButton 
            onPress={this.loginHandler}
          >
            Login
          </StyledButton>
        </LoginContainer>
      </BackgroundImage>
    ); 
  }
}
const BackgroundImage = styled.ImageBackground`
  width:100%; 
  flex: 1; 
`
const LoginContainer = styled.View`
  padding: 20px;
  justify-content:center;
  width: 100%; 
`
export default AuthScreen;