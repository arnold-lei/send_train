import React, { Component } from 'react'; 
import {PlaceHolder, Container} from '../UI/Elements'
import StyledButton from '../../components/UI/StyledButton'

class ImagePicker extends Component {
  render(){
    return(
      <Container nopadding>
        <PlaceHolder
         icon="image"
      />
      <StyledButton onPress={() => alert('Take a picture of the route')}>Add Image</StyledButton>
      </Container>
    )
  }
}
export default ImagePicker