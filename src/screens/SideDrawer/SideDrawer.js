import React, { Component } from 'react'; 
import {View, Text, Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

class SideDrawer extends Component {
  render(){
    return(
      // <SafeAreaView style={{backgroundColor:"white"}}>
        <View
          style={[styles.container, {width:Dimensions.get("window").width * 0.7, backgroundColor: "white"}]}
        >
          <Text>Side Drawer</Text>
        </View>
      // </SafeAreaView>
    ); 
  }
}
export default SideDrawer; 

const styles = StyleSheet.create({
  container: {
    paddingTop: 22, 
    paddingLeft: 22,
    backgroundColor: "white", 
    flex: 1, 
  }
})
// const SideDrawerContainer = styled.View`
//   background-color: #fff;
//   margin-left: 20px;
//   flex:1;
//   width: ${Dimensions.get("window").width * 0.7};
// `