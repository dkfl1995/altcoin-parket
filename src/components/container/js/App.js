import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchInfo} from '../../../actions/actions';
import AppView from "../../view/js/AppView";
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
  return {
    isOn: state.receiving.isOn,
    isFailed: state.receiveFailed.isFailed,
    info: state.receiveInfo.info
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: bindActionCreators(fetchInfo, dispatch)
  };
};

const App = (props) => {
  return (
          <div>
              <AppView {...props}/>
          </div>
  )
}

App.propTypes = {
  info: PropTypes.object,
  isFailed: PropTypes.bool,
  isOn: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(App);