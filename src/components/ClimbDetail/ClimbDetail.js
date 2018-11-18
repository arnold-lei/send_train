import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/Feather'

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
          <TouchableOpacity
            onPress={props.onDeleteClimb}
          >
            <View>
              <Text>Delete</Text>
              <Icon name="trash" size={30} color="black" />
            </View>
          </TouchableOpacity>
          
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