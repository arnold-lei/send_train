// import { Navigation } from 'react-native-navigation';
import React, {Component} from 'react';
import {Text, View} from 'react-native'
import AuthScreen from './src/screens/Auth/Auth';
import AddClimbScreen from './src/screens/AddClimb/AddClimb';
import MyClimbsScreen from './src/screens/MyClimbs/MyClimbs';
import ClimbDetailScreen from './src/screens/ClimbDetail/ClimbDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';
//redux
import {Provider} from 'react-redux'; 
import configureStore from './src/store/configureStore'

const store = configureStore();

class App extends Component {
  render() {
    return(
      <View>
        <Text style={{color:'white'}}>Hello World</Text>
      </View>
    )
  }
}

export default App

// //Register Screens
// Navigation.registerComponent("send-train.AuthScreen", () => AuthScreen, store, Provider);
// Navigation.registerComponent("send-train.AddClimbScreen", () => AddClimbScreen, store, Provider)
// Navigation.registerComponent("send-train.MyClimbsScreen", () => MyClimbsScreen, store, Provider)
// Navigation.registerComponent("send-train.ClimbDetailScreen", () => ClimbDetailScreen, store, Provider)
// Navigation.registerComponent("send-train.SideDrawerScreen", () => SideDrawerScreen)
// //Start the App
// Navigation.startSingleScreenApp({
//   screen: {
//     screen: "send-train.AuthScreen",
//     title: "Login"
//   }
// })
