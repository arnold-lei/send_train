import {
  ADD_CLIMB,
  DELETE_CLIMB,
  SELECT_CLIMB,
  DESELECT_CLIMB,
} from './actionTypes';

export const addClimb = (climbName) => {
  return {
    type: ADD_CLIMB, 
    climbName: climbName,
  }
}

export const deleteClimb = () => {
  return {
    type: DELETE_CLIMB,
  }
}

export const selectClimb = (key) => {
  console.log("we out herre", key)
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