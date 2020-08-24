import * as actionTypes from './ActionTypes';

export const AddList = (title) =>{
    return(
        {
        type: actionTypes.ADD_LIST,
        payload: {
            title: title
        }
    }
    )
}

export const AddCard = (listId, text) =>{
    return(
        {
            type :actionTypes.ADD_CARD,
            payload: { 
                id: listId,
                text: text
            }
        }
    )
}

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
) => {
    return (
        {
            type: actionTypes.DRAG_HAPPENED,
            payload: {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type
            }
        }
    )
}

export const deleteCard = (listId, cardId) =>{
    return(
        {
            type: actionTypes.DELETE_CARD,
            payload: {
                listId,
                cardId
            }
        }
    )
}

export const deleteList = (listId) => {
    console.log('delete list');
    return(
        {
            type: actionTypes.DELETE_LIST,
            payload: {
                listId
            }
        }
    )
}