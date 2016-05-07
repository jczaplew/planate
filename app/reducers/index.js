import { combineReducers } from 'redux'

const PrimaryReducer = (state = {
  amount: 3000
}, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        amount: state.amount + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        amount: state.amount - 1
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  PrimaryReducer
})

export default reducers
