import React, {Component} from 'react';
import { connect } from 'react-redux';
import ClimbInput from './src/components/ClimbInput/ClimbInput';
import ClimbList from './src/components/ClimbList/ClimbList';
import ClimbDetail from './src/components/ClimbDetail/ClimbDetail'
import climbImage from './src/assets/beautiful-image.jpg'
import styled from 'styled-components/native';
import {
  addClimb, 
  selectClimb, 
  deselectClimb, 
  deleteClimb
} from './src/store/actions/index';

class App extends Component {
  selectClimb = key => {
    this.props.onSelectClimb(key)
  };
  addClimb = climbName => {
    this.props.onAddClimb(climbName);
  };
  deleteClimb = () => {
    this.props.onDeleteClimb()
  }
  closeModal = () => {
    this.props.onDeselectClimb
  }
  render() {    
    return (
        <StyledView 
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <ClimbDetail 
            selectedClimb={this.props.selectedClimb} 
            onDeleteClimb={this.deleteClimb}
            closeModal={this.closeModal}
          />
          <StyledText welcome >
            Welcome to Send Train Are you sure redux is here?$
          </StyledText>
          <ClimbInput onSubmitClimb={this.addClimb}/>
          <ClimbList 
            climbs={this.props.climbs}
            onClimbSelected={this.selectClimb}
          />
        </StyledView>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    climbs: state.climbs,
    selectedClimb: state.selectedClimb
  };
};
const mapDispatchToPros = dispatch => {
  return {
    onAddClimb:(name) => dispatch(addClimb(name)),
    onSelectClimb: (key) =>  dispatch(selectPlace(key)),
    onDeselectClimb: () => dispatch(deselectClimb()),
    onDeleteClimb: () => dispatch(deleteClimb()),
  };
};

export default connect(mapDispatchToPros, mapStateToProps)(App);

const StyledView = styled.View`
  background-color: papayawhip; 
  flex: 1; 
  padding: 20px; 
  justify-content: flex-start; 
  align-items: center; 
`
const StyledText = styled.Text`
  font-size: ${props => props.welcome ? 20 : 15};
  text-align: center; 
  color: #333;
  margin: 10px;
`

