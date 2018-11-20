import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/Feather'
import { connect } from 'react-redux';
import {deleteClimb} from '../../store/actions/index'

class ClimbDetailScreen extends Component {
  onDeleteClimbHandler = () => {
    this.props.onDeleteClimb(this.props.selectedClimb.key)
    this.props.navigator.pop()
  }
  render(){
    return(
      <ClimbDetailContainer>
        <PlaceImage source={this.props.selectedClimb.image}/>
        <Text>{this.props.selectedClimb.name}</Text>
        <View>
          <TouchableOpacity
            onPress={this.onDeleteClimbHandler}
          >
            <View>
              <Text>Delete</Text>
              <Icon name="trash" size={30} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </ClimbDetailContainer>
    )
  }
};

const ClimbDetailContainer = styled.View`
  margin:22px;
`
const PlaceImage = styled.Image`
  width: 100%; 
  height: 200px; 
`
const StyledButton = styled.Button`
  
`
const mapDispatchToProps = dispatch => {
  return {
    onDeleteClimb: (key) => dispatch(deleteClimb(key))
  }
}
export default connect(null, mapDispatchToProps)(ClimbDetailScreen);