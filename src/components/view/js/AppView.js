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
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.info !== this.state.info){
            this.setState({isOn: nextProps.isOn, isFailed: nextProps.isFailed, info: nextProps.info});
        }
    }
    render(){
        var {props} = this;
        console.log(this.props);
        return(
            <div>
                <div className="container">
                    <div className='row'>
                        <p id="text" className="col-md-8 col-10 ">{"Hey, Do u want to get in touch with lastest e-coins prices? Tap at button below than"}</p>
                        <div className="col-md-4 col-2 ">
                            <div className="btn " onClick={e => {e.preventDefault(); this.props.fetchInfo()}}>Find out!</div>
                        </div>
                        {
                            (props.info && !props.isOn) ? <CoinContainer {...props}></CoinContainer> : 
                            (props.isFailed && (props.isFailed !== props.isOn)) ? <div>Data is unavailable now. Try later to fetch</div> : 
                            (props.isOn && (props.isFailed !== props.isOn)) ? <span>Loading...</span> : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default AppView;