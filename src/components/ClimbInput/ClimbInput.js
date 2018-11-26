import React, { Component } from 'react';
import styled from 'styled-components/native';
import {View, Picker} from 'react-native';
import StyledInput from '../UI/StyledInput'
// todo: We don't need this
const ClimbInput = props => (
  <StyledInput 
    placeholder="Climb Name"
    value={props.climbName}
    onChangeText={props.onChangeText}
    label="Climb Name" 
  />
)
export default ClimbInput
