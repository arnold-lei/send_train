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
import ImagePicker from '../../components/ImagePicker/ImagePicker'
import LocationPicker from '../../components/ImagePicker/ImagePicker'
import _ from 'lodash'

class AddClimbScreen extends Component {
  //handles color of the burger menu
  static navigatorStyle={
    navBarButtonColor: "#3F5DCB"
  }
  state ={ 
    climbName: '', 

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
  climbNameChangeHandler= val => {
    this.setState({climbName: val})
  }
  submitClimbHandler = () => {
    if(_.isEmpty(this.state.climbName.trim())){
      alert('The name can\t be empty')
    } else {
      this.props.onSubmitClimb(this.state.climbName);
    }
  }
  render() {
    return (
      <StyleScrollView>
        <Title>Add Climb</Title>
        <ClimbInput
          climbName={this.state.climbName}
          onChangeText={this.climbNameChangeHandler}
        />
        <StyledInput 
          placeholder="Grade" 
          label="Grade"
        />
        <StyledInput 
          placeholder="Beta" 
          label="Beta"
        />
        <ImagePicker/>
        <LocationPicker/>

        <StyledButton primary onPress={this.submitClimbHandler}>Add Climb</StyledButton>
      </StyleScrollView>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSubmitClimb: (climbName) => dispatch(addClimb(climbName))
  }
}
export default connect(null, mapDispatchToProps)(AddClimbScreen)

const StyleScrollView = styled.ScrollView`
  padding:15px; 

`