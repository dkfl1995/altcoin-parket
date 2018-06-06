import React, {Component} from 'react';
import '../css/App.css';
import CoinContainer from "./CoinContainer";



const AppView = (props) => {
    return(
        <div>
            <div className="container">
                <div className='row'>
                    <p id="text" className="col-md-8 col-10 ">{"Hey, Do u want to get in touch with lastest e-coins prices? Tap at button below than"}</p>
                    <div className="col-md-4 col-2 ">
                        <div className="btn " onClick={e => {e.preventDefault(); props.fetchInfo()}}>Find out!</div>
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

export default AppView;