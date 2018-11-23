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


class AuthScreen extends Component {
  loginHandler = () => { 
    startTabs();
  }

  render(){
    return (
      <BackgroundImage 
        // source={backgroundImage}
      >
        <LoginContainer>
          <Title>Login </Title>
          <StyledInput 
            placeholder="Email" 
            label="Welcome to the Send Train"
          />
          <StyledInput placeholder="Password" />
          <StyledButton 
            primary
            onPress={this.loginHandler}
          >
            Login
          </StyledButton>
          {/* <Button title="Login" onPress={this.loginHandler}/> */}
          <Title>Sign Up!</Title>
          <StyledInput placeholder="Email" />
          <StyledInput placeholder="Password" />
          <StyledInput placeholder="Confirm Password" /> 
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