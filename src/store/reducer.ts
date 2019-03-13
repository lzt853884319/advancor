import ActionType from './actionTypes';
import {combineReducers} from 'redux';

const initialState = {
    num: 1,
    todos: []
}

function couter(state = initialState, action) {
    switch (action.type){

        case ActionType.ADD_COUTER:
            state = Object.assign({}, state, {
                num: state.num + 1
            })
            break;

        case ActionType.MINUS_COUTER:
            state = Object.assign({}, state, {
                num: state.num - 1
            })
            break;
        default :
            return state;
    }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

function list(state = initialState, action) {
    switch (action.type){

        case ActionType.MINUS_COUTER:
            state = Object.assign({}, state, {
                couter: state.num - 1
            })
            break;
        default :
            return state;
    }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}


export default combineReducers({
    couter
});
