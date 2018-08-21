/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
import Wrapper from './containers/MainContainer.jsx';
import { connect } from 'react-redux';
import store from './store.js';
import * as types from './constants/actionTypes.js'



const mapStateToProps = store => ({
  // add pertinent state here
  Month: store.monthReducer
});

const mapDispatchToProps = dispatch => ({

});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Wrapper/>
      </div>
    )
  }

  componentDidMount(props) {
    fetch('http://slack-server.elasticbeanstalk.com/calendar/NY/6', {
      method: 'GET'
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        store.dispatch(types.loadMonth(data))
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);