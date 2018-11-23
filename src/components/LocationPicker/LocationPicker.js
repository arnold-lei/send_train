import React, { Component } from 'react'; 
import {PlaceHolder, Container} from '../UI/Elements'
import StyledButton from '../../components/UI/StyledButton'

class LocationPicker extends Component {
  render(){
    return(
      <Container nopadding>
        <PlaceHolder
         icon="camera"
      />
      <StyledButton onPress={() => alert('Find my location')}>Locate Me</StyledButton>
      </Container>
    )
  }
}
export default LocationPicker