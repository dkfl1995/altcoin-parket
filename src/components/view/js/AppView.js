import React, {Component} from 'react';
import '../css/App.css';
import CoinContainer from "./CoinContainer";



class AppView extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOn: this.props.isOn,
            isFailed: this.props.isFailed,
            info: this.props.info
        };
        console.log('Update: ',this.state);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.info !== this.state.info){
            this.setState({isOn: nextProps.isOn, isFailed: nextProps.isFailed, info: nextProps.info});
        }
    }
    render(){
        var {props} = this;
        return(
            <div>
                <p id="text">{"Hey, Do u want to get in touch with lastest e-coins prices? Tap at button below than"}</p>
                <div className="btn" onClick={e => {e.preventDefault(); this.props.fetchInfo()}}>Find out!</div>
                <div className="container">
                    <CoinContainer {...props}></CoinContainer>
                </div>
            </div>
        );
    }
}

export default AppView;