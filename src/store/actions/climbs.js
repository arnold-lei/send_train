import {
  ADD_CLIMB,
  DELETE_CLIMB,
  SELECT_CLIMB,
  DESELECT_CLIMB,
} from './actionTypes';

export const addClimb = (climbInfo) => {
  return {
    type: ADD_CLIMB, 
    climbInfo: climbInfo,
  }
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