import * as React from 'react';
import cube from './math';
import {Link} from 'react-router-dom';
import Routes from './config/router';
// import _ from 'lodash';

export default class App extends React.Component {
    public render(){
        return (
            <div>
                <div>
                    <Link to="/">首页</Link>
                    &nbsp;&nbsp;
                    <Link to="/detail">详情页</Link>
                </div>
                <Routes />
            </div>
        );
    }
}
