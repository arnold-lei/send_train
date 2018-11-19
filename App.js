import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import ShareClimbScreen from './src/screens/ShareClimb/ShareClimb';
import FindClimbScreen from './src/screens/FindClimb/FindClimb';

//Register Screens
Navigation.registerComponent("send-train.AuthScreen", () => AuthScreen);
Navigation.registerComponent("send-train.ShareClimbScreen", () => ShareClimbScreen)
Navigation.registerComponent("send-train.FindClimbScreen", () => FindClimbScreen)
//Start the App
Navigation.startSingleScreenApp({
  screen: {
    screen: "send-train.AuthScreen",
    title: "Login"
  }
})
