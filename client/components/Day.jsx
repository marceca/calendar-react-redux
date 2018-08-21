import React from 'react';
import { connect } from 'react-redux';
import store from '../store.js';



let days = [];
for(let i = 0; i < 7; i++) {
    days.push(
        <div className="single-day" key={['day' + i]}>day {[i + 1]}</div>
    )
}


const mapStateToProps = props => ({
    // add pertinent state here
    Month: store.monthReducer
});
console.log(store.Month)

const Day = (props) => {
    return(
        <div className="single-week">
            {days}
        </div>
    )
}

export default connect(mapStateToProps)(Day)