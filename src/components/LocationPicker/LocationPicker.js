import React, { Component } from 'react'; 
import {Dimensions} from 'react-native';
import {PlaceHolder, Container} from '../UI/Elements'
import StyledButton from '../../components/UI/StyledButton'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class LocationPicker extends Component {
  state = {
    initialRegion: { 
      latitude: 40.2399878,
      longitude: -74.727966,
      latitudeDelta: 0.0052,
      longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
    }
  }
  render(){
    return(
      <Container 
        nopadding>
        <MapView
          provider={PROVIDER_GOOGLE}
          style = {
            {
              flex: 1,
              height: 300,
              width: "100%", 
              justifyContent: 'flex-end', 
            }
          }
          initialRegion={this.state.initialRegion}
        />
        <StyledButton onPress={() => alert('Find my location')}>Locate Me</StyledButton>
      </Container>
    )
  }
}
export default LocationPicker