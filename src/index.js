import * as React from 'react';
import App from './App';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDom.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'))
