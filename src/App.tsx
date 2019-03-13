import * as React from 'react';
import {Link} from 'react-router-dom';
import Routes from './config/router';
import { hot } from 'react-hot-loader/root';
// import {dispatch} from 'redux';
// import _ from 'lodash';
import Header from './views/Header';
import store from './store';
import {addCouter} from './store/ActionCreate'

const isDev = process.env.NODE_ENV === 'development';

class App extends React.Component<{}, {couter: number}> {
    constructor(props) {
        super(props);
        this.state=store.getState()
        store.subscribe(this.reloadData)
    }
    public render(){
        return (
            <div>
                <Header />
                <div>
                    <Link to="/home">首页{this.state.couter}</Link>
                    &nbsp;&nbsp;
                    <Link to="/about">详情页</Link>
                    &nbsp;&nbsp;
                    <Link to="/user">用户</Link>
                </div>
                <div onClick={this.addCouterClick}>++`1</div>
                <Routes />
            </div>
        );
    }
    public addCouterClick =() => {
        const action = addCouter()
        store.dispatch(action)
    }
    public reloadData = () => {
        this.setState(store.getState())
    }
}

export default isDev? hot(App): App;
