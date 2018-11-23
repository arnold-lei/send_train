import React from 'react'; 
import styled from 'styled-components/native';

const styledInput = props => (
  <InputWrapper>
    {props.label && <Label>{props.label}</Label>}
    <StyledInput 
      underlineColorAndroid="transparent"
      {...props}
    /> 
  </InputWrapper>
)
const InputWrapper = styled.View`
  
`
const Label = styled.Text`
  color: #3F5DCB;
  font-size: 18px;
`
const StyledInput = styled.TextInput`
  width: 100%;
  border: 2px solid #3F5DCB ;
  padding: 5px 10px;
  height: 35px; 
  margin-bottom:15px; 
  background-color:  #B9C4D6;
  /* opacity:0.7; */
`
export default styledInput;