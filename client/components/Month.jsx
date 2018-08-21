import React, { Component } from 'react';
import Week from './Week.jsx'


const MonthDisplay = (props) => {

    return(
    <div className="monthWrapper">
        <Week />
        <Week />
        <Week />
        <Week />
        <Week />
    </div>
    );
};

export default MonthDisplay;