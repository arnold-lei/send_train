import React, { Component } from 'react'; 
import {PlaceHolder, Container} from '../UI/Elements';
import StyledButton from '../../components/UI/StyledButton';
import { Image, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class PickImage extends Component {
  state={
    pickedImage: null,
  }
  pickedImageHander = () => {
    ImagePicker.showImagePicker({title: "Pick an Image"}, res =>{
      if(res.didCancel){
        console.log('User Cancel')
      } else if(res.error){
        console.log('Error', res.error)
      } else {
        this.setState({
          pickedImage: {uri: res.uri}
        })
        this.props.onImagePicked({uri: res.uri, base64: res.data})
      }
    })
  }
  render(){
    return(
      <Container nopadding>
      <View
        style={{width:'100%', height:150, backgroundColor:'gray'}}
      >
        <Image source={this.state.pickedImage} style={{width:'100%', height:'100%'}}/>
      </View>
      <StyledButton onPress={this.pickedImageHander}>Add Image</StyledButton>
      </Container>
    )
  }
}
export default PickImage

