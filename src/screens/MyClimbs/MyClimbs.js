import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import ClimbList from '../../components/ClimbList/ClimbList'
import {Container} from '../../components/UI/Elements'

class MyClimbsScreen extends Component {
  //handles color of the burger menu
  static navigatorStyle = {
    navBarButtonColor: "#3F5DCB"
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
      <Container>
        <Text>Projects</Text>
        <ClimbList 
          climbs={this.props.climbs}
          onClimbSelected={this.onClimbSelectedHandler}/>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    climbs: state.climbs.climbs
  }
}

export default connect(mapStateToProps)(MyClimbsScreen)