import React from 'react'; 

import { Text } from 'react-native'; 
import styled from 'styled-components/native';

const ClimbCard = props => (
  <ClimbCardWrapper 
    onPress={props.onClimbSelected}
  >
    <Card>
      <ClimbImage 
        resizeMode="contain"
        source={props.climbImage}
      />
      <Text>{props.climbName}</Text>
    </Card>    
  </ClimbCardWrapper>
)

const ClimbCardWrapper = styled.TouchableOpacity`
  
`
const ClimbImage = styled.Image`
  margin-right: 10px;
  width: 100px;
  height: 100px; 
`


const Card = styled.View`
  width: 100%; 
  margin-bottom: 5px;
  padding: 10px; 
  margin-bottom: 5px;
  background-color: #B2BCAA;
  flex-direction: row; 
  align-items: center;
`
export default ClimbCard