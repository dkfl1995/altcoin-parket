import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/container/js/App';
import registerServiceWorker from './registerServiceWorker';

import combineReducers from './reducers/rootReducer';

let store = compose(applyMiddleware(thunk))(createStore)(combineReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
