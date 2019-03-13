import * as React from 'react';
import App from './App';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import rootReducer from 'store/reducer';
import {createStore} from 'redux';


const store = createStore(rootReducer)

ReactDom.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'))
