import * as React from 'react';
import {Link} from 'react-router-dom';
import Routes from './config/router';
import { hot } from 'react-hot-loader/root';
// import {dispatch} from 'redux';
// import _ from 'lodash';
import Header from './views/Header';
import {connect} from 'react-redux';
import {addCouter, minusCouter} from './store/ActionCreate'

const isDev = process.env.NODE_ENV === 'development';

interface IProps {
    couter: {num: number};
    addCouterClick: () => {};
    minusCouterClick: () => {};
}

class App extends React.Component<IProps, {}> {
    constructor(props) {
        super(props);
    }
    public render(){
        return (
            <div>
                <Header />
                <div>
                    <Link to="/home">首页{this.props.couter.num}</Link>
                    &nbsp;&nbsp;
                    <Link to="/about">详情页</Link>
                    &nbsp;&nbsp;
                    <Link to="/user">用户</Link>
                </div>
                <div onClick={this.props.addCouterClick}>点击后+1</div>
                <div onClick={this.props.minusCouterClick}>点击后-1</div>
                <Routes />
            </div>
        );
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => {
    return {
        addCouterClick: () => {
            const action = addCouter()
            dispatch(action)
        },
        minusCouterClick: () => {
            const action = minusCouter()
            dispatch(action)
        }
    }
}

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App)


// export default ReduxApp;
export default isDev? hot(ReduxApp): ReduxApp;
