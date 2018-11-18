import {
  ADD_CLIMB,
  DELETE_CLIMB,
  SELECT_CLIMB,
  DESELECT_CLIMB
} from '../actions/climbs'

const initialState = {
    climbs: [
      {
        key: Math.random().toString(),
        name: 'balls hard',
        grade: 5.9,
        // image: action.climbImage,
      }
    ],
    selectedClimb: null,
}; 

const climbReducer = (state = initialState, action) => {
  console.log('state:',state)
  switch (action.type) {
    case 'ADD_CLIMB': 
      return {
        ...state, 
        climbs: state.climbs.concat({
          key: Math.random().toString(), 
          name: action.climbName,
          grade: action.climbGrade, 
          image: action.climbImage,
        })
      };
    case 'DESELECT_CLIMB': 
        return {
          ...state, 
          selectedClimb: null, 
        }
    case 'SELECT_CLIMB':
      console.log('SELECT_CLIMB')
      return {
        ...state,
        selectedClimb: state.climbs.find(climb => {
          return climb.key === action.key;
        })
      }
    case 'DELETE_CLIMB': 
      //error handle for no selected place
      return {
        ...state,
        climbs: state.climbs.filter(climb => {
          return climb.key !== state.selectedClimb.key
        }),
        selectedClimb: null,
      }
    default: 
      console.log('Action', action.type);
      console.log('State', state)
      return state; 
  }
}

export default climbReducer; 