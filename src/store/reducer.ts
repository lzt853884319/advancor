import ActionType from './actionTypes'

const initialState = {
    couter: 1,
    todos: []
}

function reducer(state = initialState, action) {
  switch (action.type){

    case ActionType.ADD_COUTER:
        state = Object.assign({}, state, {
            couter: state.couter + 1
        })
        break;
    default :
        return state;
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

export default reducer;
