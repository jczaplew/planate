'use strict';

import { connect } from 'react-redux'
import Planate from '../components/Planate'

const mapStateToProps = (state) => {
  return {
    amount: state.PrimaryReducer.amount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  //  onDictionaryClick: (dict_id) => {
  //    dispatch(toggleDictionary(dict_id))
  //  }
  }
}

const PlanateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Planate)

export default PlanateContainer
