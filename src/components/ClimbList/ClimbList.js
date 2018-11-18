import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import ClimbCard from '../ClimbCard/ClimbCard';

const ClimbList = props => {
  // Should really use flatlist
  // return (
  //   <StyledFlatList
  //     data={props.climbs}
  //     renderItem={(info) => {
  //       <ClimbCard 
  //         climbName ={info.item.name}
  //         // climbImage={data.item.image}
  //         onItemPressed={() => props.deleteClimb(data.info.key)}
  //       />
  //     }}
  //   />
  // );
  const ClimbListOutput = props.climbs.map((climb, i) => (
    <ClimbCard
      climbName ={climb.name}
      climbImage={climb.image}
      key={climb.key}
      onClimbSelected={() => props.onClimbSelected(climb.key)}
    />
  ));
  return <StyledScrollView>{ClimbListOutput}</StyledScrollView>
};

const StyledScrollView = styled.ScrollView`
  width: 100%; 
`
export default ClimbList;
