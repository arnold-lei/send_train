import React, {Component} from 'react';

import ClimbInput from './src/components/ClimbInput/ClimbInput';
import ClimbList from './src/components/ClimbList/ClimbList';
import ClimbDetail from './src/components/ClimbDetail/ClimbDetail'
import climbImage from './src/assets/beautiful-image.jpg'
import styled from 'styled-components/native';

export default class App extends Component {
  state = {
    climbs: [],
    selectedClimb: null,
  }
  climbSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedClimb: prevState.climbs.find(climb => {
          return climb.key === key;
        })
      }
    })
  };
  addClimb = climbName => {
    this.setState(prevState => {
      return {
        climbs: prevState.climbs.concat({
          key: Math.random().toString(), 
          name: climbName,
          image: climbImage,
        })
      };
    });
  };
  deleteClimb = () => {
    this.setState( prevState => {
      return {
        climbs: prevState.climbs.filter(climb => {
          return climb.key !== this.state.selectedClimb.key
        }),
        selectedClimb: null,
      }
    })
  }
  closeModal = () => {
    console.log('we out herere')
    this.setState({
      selectedClimb: null
    })
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
            selectedClimb={this.state.selectedClimb} 
            onDeleteClimb={this.deleteClimb}
            closeModal={this.closeModal}
          />
          <StyledText welcome >
            Welcome to Send Train
          </StyledText>
          <ClimbInput onSubmitClimb={this.addClimb}/>
          <ClimbList 
            climbs={this.state.climbs}
            onClimbSelected={this.climbSelectedHandler}
          />
        </StyledView>
    );
  }
}

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
