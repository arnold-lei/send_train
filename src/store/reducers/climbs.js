import {
  ADD_CLIMB,
  DELETE_CLIMB,
  SELECT_CLIMB,
  DESELECT_CLIMB
} from '../actions/climbs'

const initialState = {
    climbs: [],
    selectedClimb: null,
}; 

const climbReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIMB: 
      return {
        ...state, 
        climbs: prevState.climbs.concat({
          key: Math.random().toString(), 
          name: action.climbName,
          grade: action.climbGrade, 
          image: action.climbImage,
        })
      };
    case DESELECT_CLIMB: 
        return {
          ...state, 
          selectedClimb: null, 
        }
    case SELECT_CLIMB:
      return {
        ...state,
        selectedClimb: state.climbs.find(climb => {
          return climb.key === action.climbKey;
        })
      }
    case DELETE_CLIMB: 
      //error handle for no selected place
      return {
        ...state,
        climbs: state.climbs.filter(climb => {
          return climb.key !== state.selectedClimb.key
        }),
        selectedClimb: null,
      }
    default: 
      return state; 
  }
}

export default climbReducer; 