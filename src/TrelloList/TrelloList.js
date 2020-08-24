import React from 'react';
import {useDispatch} from 'react-redux';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import CloseIcon from '@material-ui/icons/Close';

import * as classes from './TrelloList.module.css';
import Card from '../Card/Card';
import TrelloActionButton from '../TrelloActionButton/TrelloActionButton';
import {deleteList} from '../Store/Actions/ListActions';

const TrelloList  = (props) => {
    const dispatch = useDispatch();
    const data = props.list

    return(
        <Draggable draggableId={String(data.id)} index={props.index}>
            {(provided) => (
                <div {...provided.draggableProps} ref={provided.innerRef}
                {...provided.dragHandleProps} className={classes.card}>
                <Droppable droppableId = {String(data.id)}>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                            <h4>{data.title}</h4>
                            <div onClick={() => dispatch(deleteList(props.listId))}>
                            <CloseIcon/>
                            </div>
                            </div>
                            <div className={classes.cardsDisplay}>
                            {data.cards.map((card, index)=> 
                                <Card key={card.id} content={card.text} listId={data.id} id={card.id} index={index}/>
                            )}
                            {provided.placeholder}
                            </div>
                            <TrelloActionButton id={data.id}/>
                        </div>
                    )}
                </Droppable>
                </div>
            )}
        </Draggable>
        
    )
}

export default TrelloList;