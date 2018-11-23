import React, { Component } from 'react'; 
import {View, Text, Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather'

class SideDrawer extends Component {
  render(){
    return(
      // TODO: Need to clean this up into components
      <SideDrawerContainer>
        <SideDrawerHeader>
          <HeaderText>Send Train</HeaderText>
          <SubHeaderText>Welcome Arnold</SubHeaderText>
        </SideDrawerHeader>
        <SideNavDrawerBody>
          <SideDrawerNavTop>
            <SideNavItem>
              <Icon name="user" size={30} color="#3F5DCB" style={{marginRight:15}}/>
              <SideNavText>Account</SideNavText>
            </SideNavItem>
            <SideNavItem>
              <Icon name="settings" size={30} color="#3F5DCB" style={{marginRight:15}}/>
              <SideNavText>Settings</SideNavText>
            </SideNavItem>
          </SideDrawerNavTop>
          <SideDrawerNavBottom>
            <SideNavItem>
              <Icon name="log-out" size={30} color="#3F5DCB" style={{marginRight:15}}/>
              <SideNavText>Logout</SideNavText>
            </SideNavItem>
          </SideDrawerNavBottom>
        </SideNavDrawerBody>
      </SideDrawerContainer>
    ); 
  }
}
export default SideDrawer; 

const SideDrawerContainer = styled.View`
  background-color: white;
  flex: 1;
  width: ${Dimensions.get("window").width * 0.7};
`
const SideDrawerHeader = styled.View`
  padding-left: 15px;
  justify-content:center;
  flex:1; 
  height:100px;
  background-color: #3F5DCB; 
  color: white; 
`
const HeaderText = styled.Text`
  color:white; 
  font-weight:bold; 
  font-size: 24px;
  margin-bottom:5px;
`
const SubHeaderText = styled.Text`
  color:white;
  font-size:20px;

`
const SideNavDrawerBody = styled.View`
  flex:2;
  background-color: white;
  height:50px;
  border:1px solid #B9C4D6;
`
const SideDrawerNavBottom = styled.View`
  align-content: flex-end;
`
const SideDrawerNavTop = styled.View `
  flex-grow: 1;
`
const SideNavText = styled.Text `
  font-size:20px;
  color: #3F5DCB;
`
const SideNavItem = styled.TouchableOpacity `
  flex-direction:row;
  align-items: center;
  padding:15px;
  border: 1px solid #B9C4D6;
  margin:-1px;
`
