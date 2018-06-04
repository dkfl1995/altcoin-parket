import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchInfo} from '../../../actions/actions';
import AppView from "../../view/js/AppView";

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

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          isOn: props.isOn,
          isFailed: props.isFailed,
          info: props.info
        };
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.isFailed !== this.state.isFailed || nextProps.isOn !== this.state.isOn || nextProps.info !== this.state.info){
        console.log(nextProps);
          this.setState({
            info: nextProps.info,
            isFailed: nextProps.isFailed,
            isOn: nextProps.isOn
          });
      }
  }
    render(){
      
      const props = this.props;
        return (
            <div>
                <AppView {...props}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);