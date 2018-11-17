import React, { Component } from 'react';
import styled from 'styled-components/native';

class ClimbInput extends Component {
    state = {
      climbName: ''
    }
    climbNameChangeHandler = val => {
      this.setState({
        climbName: val,
      })
    }
    submitClimbHandler = () => {
      if(this.state.climbName.trim() === ""){
        return; 
      }
      this.props.onSubmitClimb(this.state.climbName)
    }
  render() {
    return(
      <InputContainer>
        <StyledTextInput 
          value={this.props.climbName} 
          placeholder="What's the name of the climb?"
          onChangeText={this.climbNameChangeHandler}
        />
        <SendButton 
          title="Add"
          onPress={this.submitClimbHandler}
        />
      </InputContainer>
    )
  }
}
export default ClimbInput


const InputContainer = styled.View`
  width:100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
`
const StyledTextInput = styled.TextInput`
  width:80%;
  padding: 10px;
  border: 1px solid black; 
`
const SendButton = styled.Button`
  width: 20%;
  padding: 5px; 
  color: mediumseagreen;
  border-radius: 3px; 
  border: 2px solid #90323d;
`