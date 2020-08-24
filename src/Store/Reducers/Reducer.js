import * as ActionTypes from '../Actions/ActionTypes';

let listId = 2;
let cardId = 6;
const initialState = [
    {
    title: 'today',
    id: `list-${0}`,
    cards: [
        {
            id: `card-${0}`,
            text: 'wake up',

        },
        {
            id: `card-${1}`,
            text: 'have breakfast'
        }
    ]
    },
    {
        title: 'learning',
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: 'html',
    
            },
            {
                id: `card-${3}`,
                text: 'css'
            },
            {
                id: `card-${4}`,
                text: 'javascript',
    
            },
            {
                id: `card-${5}`,
                text: 'react'
            }
        ]
        }
]

const Reducer = (state=initialState, action) => {
    switch(action.type){ 
        case ActionTypes.ADD_LIST:
            const newList= {
                title: action.payload.title,
                id: `list-${listId}`,
                cards: []
            }
            listId=listId + 1;
            return [...state, newList]
        case ActionTypes.ADD_CARD:{
            const newCard = {
                id: `card-${cardId}`,
                text: action.payload.text
            }
            cardId = cardId + 1;
            const newState = state.map((list)=>{
                if(list.id === action.payload.id){
                    return(
                        {
                            ...list,
                            cards: [...list.cards, newCard]
                        }
                    )
                }else{
                    return(list);
                }
            })
            return newState;
        }

        case ActionTypes.DRAG_HAPPENED: 
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                type
            } = action.payload;
            const newState = [...state];

            //dragging lists around
            if(type === 'list'){
                const list = newState.splice(droppableIndexStart,1);
                newState.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }

            //in the same list
            if(droppableIdStart === droppableIdEnd){
                const list = state.find((list) => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0 , ...card);
            }

            if(droppableIdStart !== droppableIdEnd) {
                //find where the drag happened
                const listStart = state.find((list) => droppableIdStart === list.id);
                //pull out the card from the list
                const card = listStart.cards.splice(droppableIndexStart, 1);
                //find where the drop happened
                const listEnd = state.find((list) => droppableIdEnd === list.id);
                //put the card in the list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }
            return newState;
        case ActionTypes.DELETE_CARD: {
            const {listId, cardId}=action.payload;
            const newState = [...state];
            const list = state.find((list)=> (
                list.id===listId
            ))
            const newDeletedCardsList = list.cards.filter((card)=> card.id!==cardId);
            list.cards=newDeletedCardsList;
            return newState
        }
        case ActionTypes.DELETE_LIST: {
            const {listId} = action.payload;
            const lists = state.filter((list)=> list.id!==listId);
            const newState = lists;
            return newState   
        }
        default: return state;
    }
}

export default Reducer;