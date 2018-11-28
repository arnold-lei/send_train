import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import ClimbInput from '../../components/ClimbInput/ClimbInput';
import StyledInput from '../../components/UI/StyledInput';
import StyledButton from '../../components/UI/StyledButton';
import {Title, Normal} from '../../components/UI/TextStyles';
import { PlaceHolder } from '../../components/UI/Elements';
import {connect} from 'react-redux';
import {addClimb} from '../../store/actions/index';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import PickImage from '../../components/ImagePicker/ImagePicker'
import LocationPicker from '../../components/LocationPicker/LocationPicker'
import _ from 'lodash'


// todo: Add form validation

class AddClimbScreen extends Component {
  //handles color of the burger menu
  static navigatorStyle={
    navBarButtonColor: "#3F5DCB"
  }
  state ={ 
    climbInfo:{
      name: '',
      grade: '', 
      beta: '',
      attempts:[], 
      location: {
        latitude: 40.2399878,
        longitude: -74.727966,
      },
      image:{
        uri: ''
      }
    }
  }
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  onNavigatorEvent = event => {
    if(event.type === 'NavBarButtonPress') {
      if(event.id === 'sideDrawerToggle'){
        this.props.navigator.toggleDrawer({
          side:'left'
        });
      }
    }
  }
  updateInputState = (key, val) => {
    this.setState(prevState=> {
      return {
        climbInfo: {
          ...prevState.climbInfo,
          [key]: val
        }
      }
    })
  }
  submitClimbHandler = () => {
    if(_.isEmpty(this.state.climbInfo.name.trim())){
      alert('The name can\t be empty')
    } else {
      this.props.onSubmitClimb(this.state.climbInfo);
    }
  }
  locationPickHandler = location => {
    this.setState(prevState => {
      return {
        climbInfo: {
          ...this.state.climbInfo, 
          location:{ 
            latitude: location.latitude, 
            longitude: location.longitude
          }
        }
      }
    })
  }
  imagePickHandler = image => {
    this.setState(prevState => {
      return {
        climbInfo:{
          ...prevState.climbInfo, 
          image:{
            ...image
          }
        }
      }
    })
  }
  render() {
    return (
      <StyleScrollView>
        <Title>Add Climb</Title>
         <LocationPicker onLocationPick={this.locationPickHandler}/>
        <StyledInput
          label="Climb Name"
          value={this.state.climbInfo.name}
          onChangeText={(val) => this.updateInputState('name',val)}
        />
        <StyledInput 
          value={this.state.climbInfo.grade}
          placeholder="Grade" 
          label="Grade"
          onChangeText={(val) => this.updateInputState('grade',val)}
        />
        <StyledInput 
          value={this.state.climbInfo.beta}
          placeholder="Beta" 
          label="Beta"
          onChangeText={(val) => this.updateInputState('beta',val)}
        />
        <PickImage onImagePicked={this.imagePickHandler}/>

        <StyledButton primary onPress={this.submitClimbHandler}>Add Climb</StyledButton>
      </StyleScrollView>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSubmitClimb: (climbInfo) => dispatch(addClimb(climbInfo))
  }
}
export default connect(null, mapDispatchToProps)(AddClimbScreen)

const StyleScrollView = styled.ScrollView`
  padding:15px; 
`