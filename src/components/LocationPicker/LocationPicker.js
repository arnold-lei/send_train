import React, { Component } from 'react'; 
import {Dimensions} from 'react-native';
import {PlaceHolder, Container} from '../UI/Elements'
import StyledButton from '../../components/UI/StyledButton'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class LocationPicker extends Component {
  state = {
    focusedRegion: {
      latitude: 40.2399878,
      longitude: -74.727966,
      latitudeDelta: 0.0052,
      longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
    },
    locationChosen: false, 

  }
  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate; 
    this.map.animateToRegion({
      ...this.state.focusedRegion, 
      latitude: coords.latitude, 
      longitude: coords.longitude
    })
    this.setState(prevState => {
      return{
        focusedRegion: {
          ...prevState.focusedRegion,
          latitude: coords.latitude,
          longitude: coords.longitude
        }, 
        locationChosen: true, 
      }
    })
    this.props.onLocationPick({
      latitude: coords.latitude, 
      longitude: coords.longitude
    })
  }
  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsEvent = {
        nativeEvent: {
          coordinate:{
            latitude: pos.coords.latitude, 
            longitude: pos.coords.longitude,
          }
        }
      }
      this.pickLocationHandler(coordsEvent)
    },
    err=> {
      console.log(err)
      alert('Please pick a location manually')
    });
  }
  render(){
    let marker = null; 
    if(this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedRegion} />
    }
    return(
      <Container 
        nopadding>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsPointsOfInterest
          style = {
            {
              flex: 1,
              height: 300,
              width: "100%", 
              justifyContent: 'flex-end', 
            }
          }
          onPress={this.pickLocationHandler}
          initialRegion={this.state.focusedRegion}
          ref={ref => this.map = ref}
        >
         {marker}
        </MapView>
        <StyledButton onPress={this.getLocationHandler}>Locate Me</StyledButton>
      </Container>
    )
  }
}
export default LocationPicker