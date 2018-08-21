/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  days: [],
  events: [],
  daysInMonth: 0
};
const monthReducer = (state=initialState, action) => {

  switch(action.type) {
    case types.LOAD_MONTH:
    let copyLoadMonth = Object.assign({}, state)
    for(var key in action.monthData) {
      let eventArr = []
      copyLoadMonth.days.push(key)
      for(let j = 0; j < action.monthData[key].length; j++) {
        eventArr.push(action.monthData[key][j])
      }
      copyLoadMonth.events.push(eventArr)
    }
    return copyLoadMonth

    default:
      return state;
  }
};

export default monthReducer;