import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const ClimbDetail = props => {
  let modalContent = null; 

  if(props.selectedClimb) {
    modalContent = (
      <View>
        <PlaceImage source={props.selectedClimb.image}/>
        <Text>{props.selectedClimb.name}</Text>
      </View>
    );
  }
  return(
    <ClimbModal
      animationType="slide"
      onRequestClose={props.closeModal}
      visible={props.selectedClimb !== null}
    >
      {modalContent}
      <ClimbDetailContainer>
        <View>
          <StyledButton 
            title="Delete" 
            onPress={props.onDeleteClimb}
          />
          <StyledButton 
            title="Close"
            onPress={props.closeModal}
          />
        </View>
      </ClimbDetailContainer>
    </ClimbModal>
  )
};

const ClimbModal = styled.Modal`
  /* background-color: '#fff'; */
`
const ClimbDetailContainer = styled.View`
  margin:22px;
`
const PlaceImage = styled.Image`
  width: 100%; 
  height: 200px; 
`
const StyledButton = styled.Button`
  
`
export default ClimbDetail;