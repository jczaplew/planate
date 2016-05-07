import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';
import PlanateApp from './PlanateApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PlanateApp />
      </Provider>
    );
  }
}
