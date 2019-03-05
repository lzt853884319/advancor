import * as React from 'react';
import cube from './math';
import {Link} from 'react-router-dom';
import Routes from './config/router';
import { hot } from 'react-hot-loader/root'
// import _ from 'lodash';
import Header from './views/Header'

const isDev = process.env.NODE_ENV === 'development';

class App extends React.Component {
    public render(){
        return (
            <div>
                <Header />
                <div>
                    <Link to="/home">首1页</Link>
                    &nbsp;&nbsp;
                    <Link to="/about">详情页</Link>
                    &nbsp;&nbsp;
                    <Link to="/user">用户</Link>
                </div>
                <Routes />
            </div>
        );
    }
}

export default isDev? hot(App): App;
