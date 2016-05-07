
import { combineReducers } from 'redux'

const PrimaryReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  PrimaryReducer
})

export default reducers
