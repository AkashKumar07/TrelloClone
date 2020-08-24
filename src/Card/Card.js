import React from 'react';
import {useDispatch} from 'react-redux';
import {Draggable} from 'react-beautiful-dnd';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import {deleteCard} from '../Store/Actions/ListActions';
import * as classes from './Card.module.css';

const Card = (props) => {
    const dispatch = useDispatch();
    return(
        <Draggable draggableId={String(props.id)} index={props.index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={classes.card}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                    <p>{props.content}</p>
                    <div onClick={() => dispatch(deleteCard(props.listId,props.id))} style={{}}>
                    < DeleteOutlineIcon/>
                    </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Card;