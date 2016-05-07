'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Planate from '../components/Planate';
import * as counterActions from '../actions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class PlanateApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Planate
    //    counter={state.count}
        {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(PlanateApp);
