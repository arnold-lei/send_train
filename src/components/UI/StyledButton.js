import React from 'react'; 
import styled from 'styled-components/native';


const styledButton = props => (
  <ButtonWrapper
    {...props}
    onPress={props.onPress}
  >
      <ButtonText {...props}>{props.children}</ButtonText> 
  </ButtonWrapper>
)
// const primaryColor = '#7296FD'
const primaryColor = '#3F5DCB'
const ButtonWrapper = styled.TouchableOpacity`
  height:50px;
  padding: 10px;
  margin-bottom: 15px;
  width:${props => props.half ? '50%' :'100%'};
  justify-content:center;
  align-items:center;
  border:2px solid ${primaryColor};
  background-color: ${props => props.primary ? primaryColor : 'white'};
`
const ButtonText = styled.Text`
  font-size:18px;
  font-weight: bold; 
  color: ${props => props.primary ? 'white' : primaryColor};
`

export default styledButton;