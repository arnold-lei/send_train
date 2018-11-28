import {
  ADD_CLIMB,
  DELETE_CLIMB,
  SELECT_CLIMB,
  DESELECT_CLIMB,
} from './actionTypes';

export const addClimb = (climbInfo) => {
  return dispatch => {
    const climbData = {
      name: climbInfo.name, 
      grade: climbInfo.grade, 
      beta: climbInfo.beta, 
      location: climbInfo.location
    }
    fetch("https://react-native-test-543b1.firebaseio.com/climbs.json", {
      method:"POST", 
      body: JSON.stringify(climbData)
    })
    .catch(err=> console.log(err))
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes)
    })
  }
  // return ({
  //   type: ADD_CLIMB, 
  //   climbInfo: climbInfo,
  // })
}

export const deleteClimb = (key) => {
  return {
    type: DELETE_CLIMB,
    key: key,
  }
}

export const selectClimb = (key) => {
  return {
    type: SELECT_CLIMB,
    key: key,
  }
}
export const deselectClimb = (key) => {
  return {
    type: DESELECT_CLIMB,
  }
}