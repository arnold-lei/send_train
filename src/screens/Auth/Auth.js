import React, { Component } from 'react'; 
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import {connect} from 'react-redux'
import { login } from '../../store/actions/index'
import styled from 'styled-components/native';
// import startTabs from '../MainTabs/startMainTabs';
import StyledInput from '../../components/UI/StyledInput'
import {Title, Normal} from '../../components/UI/TextStyles'
import StyledButton from '../../components/UI/StyledButton'
import backgroundImage from '../../assets/topo_hack.png';
import validate from '../../utility/validation'
import _ from 'lodash'


// class AuthScreen extends Component {
//   state = {
//     authMode: 'login',
//     controls:{
//       email: {
//         value: '',
//         valid: false,
//         validationRules: {
//           isEmail: true
//         }
//       },
//       password: {
//         value: '',
//         valid: false,
//         validationRules: {
//           minLength: 6,
//         }
//       },
//       confirmPassword: {
//         value: '',
//         valid: false,
//         validationRules: {
//           equalTo: 'password'
//         }
//       },
//     },
//     submitted: false
//   }
//   loginHandler = () => { 
//     // if(_.every(this.state.controls, 'valid')){
//     //   startTabs();
//     // } else{
//     //   this.setState({
//     //     submitted: true
//     //   })
//     // }
//     const authData = {
//       email: this.state.controls.email.value, 
//       password: this.state.controls.password.value
//     }
//     this.props.onLogin(authData);
//     // startTabs()
//   }
//   updateInputState = (key, value) => {
//     let connectedValue = {};
//     if (this.state.controls[key].validationRules.equalTo) {
//       const equalControl = this.state.controls[key].validationRules.equalTo;
//       const equalValue = this.state.controls[equalControl].value;
//       connectedValue = {
//         ...connectedValue,
//         equalTo: equalValue
//       };
//     }
//     if (key === "password") {
//       connectedValue = {
//         ...connectedValue,
//         equalTo: value
//       };
//     }
//     this.setState(prevState => {
//       return {
//         controls: {
//           ...prevState.controls,
//           confirmPassword: {
//             ...prevState.controls.confirmPassword,
//             valid: key === "password" ?
//               validate(
//                 prevState.controls.confirmPassword.value,
//                 prevState.controls.confirmPassword.validationRules,
//                 connectedValue
//               ) :
//               prevState.controls.confirmPassword.valid
//           },
//           [key]: {
//             ...prevState.controls[key],
//             value: value,
//             valid: validate(
//               value,
//               prevState.controls[key].validationRules,
//               connectedValue
//             )
//           }
//         }
//       };
//     });
//   };
//   authModeToggle = () => { 
//     this.setState(prevState => { 
//       return { 
//         authMode: prevState.authMode === "login" ? "signup" : "login"
//       }
//     })
//   }
//   render(){
//     let heading = null; 
//     let showConfirmPassword = null; 
//     if (this.state.authMode === "signup") {
//       showConfirmPassword = (
//         <StyledInput 
//           placeholder="Confirm Password"
//           value={this.state.controls.confirmPassword.value} 
//           invalid={!this.state.controls.confirmPassword.valid && this.state.submitted}
//           onChangeText={(val) => this.updateInputState('confirmPassword', val)}
//           autoCorrect={false}
//           secureTextEntry
//         /> 
//       )
//     }
//     this.state.authMode === "login"? heading = "Login" : heading = "Sign up!"
//     return (
//       <BackgroundImage 
//         // source={backgroundImage}
//       >
//         <StyledKeyboardAvoidingView
//           behavior="padding"
//         >

//           <LoginContainer>
//             <Title>{heading}</Title>
//             <StyledInput 
//               placeholder="Email"
//               value={this.state.controls.email.value}
//               invalid={!this.state.controls.email.valid && this.state.submitted}
//               onChangeText={(val) => this.updateInputState('email', val)}
//               keyboardType="email-address"
//               autoCapitalize="none"
//               autoCorrect={false}
//             />
//             <StyledInput 
//               placeholder="Password"
//               value={this.state.controls.password.value}
//               invalid={!this.state.controls.password.valid && this.state.submitted}
//               onChangeText={(val) => this.updateInputState('password', val)}
//               secureTextEntry
//             />
//             {showConfirmPassword}
//             <StyledButton 
//               primary
//               onPress={this.loginHandler}
//             >
//               {this.state.authMode === "login"? "Login": "Sign up"}
//             </StyledButton>
//             <StyledButton 
//               onPress={this.authModeToggle}
//             >
//               {this.state.authMode === "login" ? "Sign up now" : "Already Have an Account Login?"}
//             </StyledButton>
//           </LoginContainer>
//         </StyledKeyboardAvoidingView>
//       </BackgroundImage>
//     ); 
//   }
// }
// const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
 
// `
// const BackgroundImage = styled.ImageBackground`
//   width:100%; 
//   flex: 1; 
//   justify-content:center;
// `
// const LoginContainer = styled.View`
//   padding: 20px;
//   justify-content:center;
//   width: 100%; 
// `
// const mapDispatchToProps = dispatch => { 
//   return {
//     onLogin: (authData) => dispatch(login(authData))
//   }
// }

// export default connect(null, mapDispatchToProps)(AuthScreen);