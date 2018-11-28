import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions, 
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/Feather'
import { connect } from 'react-redux';
import {deleteClimb} from '../../store/actions/index'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


class ClimbDetailScreen extends Component {
  constructor (props){
    super(props)
    this.state = {
      climb: props.selectedClimb,
    }
  }
  onDeleteClimbHandler = () => {
    this.props.onDeleteClimb(this.props.selectedClimb.key)
    this.props.navigator.pop()
  }
  render(){
    
    return(
      <ClimbDetailContainer>
        <MapContainer>
          <MapView 
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              ...this.props.selectedClimb.location, 
              latitudeDelta: 0.0052,
              longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
            }}
          >
            <MapView.Marker coordinate={this.props.selectedClimb.location}/>
          </MapView>
        </MapContainer>
        <InfoContainer>
          <ImageContainer>
            <Image 
            source={
              {
                uri: this.props.selectedClimb.image.uri
              }
            }
            style={{width:'100%', height:'100%'}}
          />
          </ImageContainer>
          <Text>{this.props.selectedClimb.name}</Text>
          <Text>{this.props.selectedClimb.location.latitude}</Text>
          <Text>{this.props.selectedClimb.location.longitude}</Text>
          <View>
            <TouchableOpacity
              onPress={this.onDeleteClimbHandler}
            >
              <View>
                <Text>Delete</Text>
                <Icon name="trash" size={30} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </InfoContainer>
        </ClimbDetailContainer>
    )
  }
};

const ClimbDetailContainer = styled.View`
  margin:22px;
  flex:1;
`
const InfoContainer = styled.View`
  flex:2; 
`
const ImageContainer = styled.View`
  flex:1;
  margin:-22px; 
  height:150px;
`

const MapContainer = styled.View`
  flex:1; 
  margin:-22px;
`
const PlaceImage = styled.Image`
  width: 100%; 
  height: 200px; 
`
const StyledButton = styled.Button`
  
`
const mapDispatchToProps = dispatch => {
  return {
    onDeleteClimb: (key) => dispatch(deleteClimb(key))
  }
}
const styles = StyleSheet.create({
  map:{
    ...StyleSheet.absoluteFillObject,
  }
})
export default connect(null, mapDispatchToProps)(ClimbDetailScreen);