import { combineReducers } from 'redux';
let initialState = {};

function receiveInfo(state = initialState, action){
    switch(action.type){
        case 'RECEIVE_INFO':
            return Object.assign({}, state, {
                info: action.info
            });
        default:
            return state;
    }
}

function receiving(state = false, action){
    switch(action.type){
        case 'RECEIVING':
            return Object.assign({}, state, {
                isOn: action.isOn
            });
        default:
            return state;
    }
}

function receiveFailed(state = false, action){
    switch(action.type){
        case 'RECEIVE_FAILED':
            return Object.assign({}, state, {
                isFailed: action.isFailed
            });
        default:
            return state;
    }
}

export default combineReducers({
    receiveInfo, receiving, receiveFailed
});