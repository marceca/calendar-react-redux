/**
 * ************************************
 *
 * @module  actionTypes.js
 * @author
 * @date
 * @description Action Type Constants
 *
 * ************************************
 */


// add action type constants i.e.:
// export const ACTION_DESCRIPTION = "ACTION_DESCRIPTION";

const LOAD_MONTH = 'LOAD_MONTH'

const loadMonth = monthData => ({type: LOAD_MONTH, monthData})


module.exports = {
    LOAD_MONTH,
    loadMonth
}