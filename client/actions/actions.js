/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes'

export const loadMonth = (monthData) => ({
  type: types.LOAD_MONTH,
  payload: monthData,
});

// add more action creators