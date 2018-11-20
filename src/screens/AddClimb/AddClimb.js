import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import ClimbInput from '../../components/ClimbInput/ClimbInput';
import {connect} from 'react-redux';
import {addClimb} from '../../store/actions/index';

class AddClimbScreen extends Component {
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
  submitClimbHandler = climbName => {
    this.props.onSubmitClimb(climbName);
  }
  render() {
    return (
      <View>
        <Text>Share Climbs</Text>
          <ClimbInput onSubmitClimb={this.submitClimbHandler }/>
      </View>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSubmitClimb: (climbName) => dispatch(addClimb(climbName))
  }
}
export default connect(null, mapDispatchToProps)(AddClimbScreen)