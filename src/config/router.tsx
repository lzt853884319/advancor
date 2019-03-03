import * as React from 'react';
import {
    Route,
} from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import User from '../views/User';

export default () => [
    <Route  key="home" path="/" exact component={Home} />,
    <Route key="about"  path="/about/" component={About} />,
    <Route key="user"  path="/user/" component={User} />,
]
