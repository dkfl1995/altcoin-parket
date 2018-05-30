import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
// import App from './components/container/js/App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers/rootReducer';

let store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
