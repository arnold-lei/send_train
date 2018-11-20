import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import ClimbList from '../../components/ClimbList/ClimbList'

class MyClimbsScreen extends Component {
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
  onClimbSelectedHandler = key => { 
    const selectedClimb = this.props.climbs.find(climb => {
      return climb.key === key
    })
    this.props.navigator.push({
      screen: 'send-train.ClimbDetailScreen',
      title: selectedClimb.name,
      passProps:{
        selectedClimb: selectedClimb, 
      }
    })
  }
  
  render() {
    return (
      <View>
        <ClimbList 
          climbs={this.props.climbs}
          onClimbSelected={this.onClimbSelectedHandler}/>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    climbs: state.climbs.climbs
  }
}

export default connect(mapStateToProps)(MyClimbsScreen)