import actionTypes from './actionTypes';

export const changeInputValue = (value) => ({
    type: actionTypes.INPUT_VALUE_CHANGE,
    value
})

export const addListItem = () => ({
    type: actionTypes.ADD_LIST_ITEM
})

export const addCouter= () => ({
    type: actionTypes.ADD_COUTER
})

export const deleteItem = (index) => ({
    type: actionTypes.DELET_ITEM,
    index
})
