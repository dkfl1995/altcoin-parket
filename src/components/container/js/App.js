import React, { Component } from 'react';
import {connect, mapDispatchToProps, mapStateToProps} from 'react-redux';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

connect(mapDispatchToProps, mapStateToProps)(App);