import '../constants/constants';
import { RECEIVE_INFO, RECEIVE_FAILED, RECEIVING } from '../constants/constants';

const IP = 'http://localhost:3001';

function receiveInfo(info){
    return  {
        type: RECEIVE_INFO,
        info
    };
}

function receiveFailed(bool){
    return {
        type: RECEIVE_FAILED,
        isFailed: bool
    };
}

function receiving(bool){
    return {
        type: RECEIVING,
        isOn: bool
    };
}   

export function fetchInfo(){
    return dispatch => {
        return fetch(IP+'/descr',{
            body: JSON.stringify()
        })
            .then(res => {
                dispatch(receiveFailed(false));
                dispatch(receiving(true));
                var info = res.json();
                return info;
            })
            .then(json => {
                dispatch(receiving(false));
                dispatch(receiveInfo(json));
            })
            .catch(err => {
                console.log("Error did", err);
                dispatch(receiveFailed(true));
            });
    };
}