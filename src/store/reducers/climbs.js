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
        attempts: [
          {
            style: 'attempt'
          },
          {
            style: 'attempt'
          },
          {
            style: 'attempt'
          },
          {
            style: 'flash'
          },
        ]
      }
    ],
    selectedClimb: null,
}; 

const climbReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CLIMB': 
      return {
        ...state, 
        climbs: state.climbs.concat({
          key: Math.random().toString(), 
          name: action.climbName,
          grade: action.climbGrade, 
          image: action.climbImage,
          beta: action.climbBeta, 

        })
      };
    case 'DESELECT_CLIMB': 
        return {
          ...state, 
          selectedClimb: null, 
        }
    case 'SELECT_CLIMB':
      return {
        ...state,
        selectedClimb: state.climbs.find(climb => {
          return climb.key === action.key;
        })
      }
    case 'DELETE_CLIMB': 
      //TODO: error handle for no selected place
      return {
        ...state,
        climbs: state.climbs.filter(climb => {
          return climb.key !== action.key
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