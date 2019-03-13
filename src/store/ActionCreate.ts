import actionTypes from './actionTypes';

export const changeInputValue = (value) => ({
    type: actionTypes.INPUT_VALUE_CHANGE,
    value
})

export const addListItem = () => ({
    type: actionTypes.ADD_LIST_ITEM
})

export const deleteItem = (index) => ({
    type: actionTypes.DELET_ITEM,
    index
})

export const addCouter= () => ({
    type: actionTypes.ADD_COUTER
})


export const minusCouter= () => ({
    type: actionTypes.MINUS_COUTER
})
