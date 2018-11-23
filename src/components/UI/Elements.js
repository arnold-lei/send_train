import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const PlaceHolder = props => (
  <PlaceHolderWrapper>
    <Icon name={props.icon} size={30} color="#3F5DCB" />
  </PlaceHolderWrapper>
) 

const PlaceHolderWrapper = styled.View `
  border:1px solid #3F5DCB ; 
  background-color:  #B9C4D6; 
  height: 150px; 
  margin-bottom:15px;
  justify-content: center;
  align-items:center;
`
export const Container = props => (
  <ContainerWrapper {...props}>
    {props.children}
  </ContainerWrapper>
)

const ContainerWrapper = styled.View`
  padding:${props => props.nopadding ? 0: "15px"}; 
`