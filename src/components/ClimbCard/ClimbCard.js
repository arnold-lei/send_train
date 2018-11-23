import React from 'react'; 

import { Text } from 'react-native'; 
import styled from 'styled-components/native';
import * as Colors from '../../globals/Colors';
import StyledButton from '../../components/UI/StyledButton'

const ClimbCard = props => (
  <ClimbCardWrapper 
    onPress={props.onClimbSelected}
  >
    <Card>
      {/* <ClimbImage 
        resizeMode="contain"
        source={props.image}
      /> */}
      <Text>Name:{props.name}</Text>
      <Text>Grade: {props.grade}</Text>
      <Text>Attempts: {props</Text>
      <ButtonWrapper>
        <StyledButton
          primary
          half
          onPress={() =>alert('Added Attempt')}
        >Add Attempt</StyledButton>
        <StyledButton
          half
          onPress={() => alert('Sent!')}
        >Sent</StyledButton>
      </ButtonWrapper>

    </Card>    
  </ClimbCardWrapper>
)
const ButtonWrapper = styled.View`
  flex:1;
  flex-direction:row;

`
const ClimbCardWrapper = styled.TouchableOpacity`
  
`
const ClimbImage = styled.Image`
  margin-right: 10px;
  width: 100px;
  height: 100px; 
`


const Card = styled.View`
  width: 100%; 
  margin-bottom: 15px;
  padding: 10px 10px 0 10px; 
  background-color: ${Colors.secondary};
  flex-direction: column; 
`
export default ClimbCard