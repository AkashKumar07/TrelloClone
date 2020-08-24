import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

import * as classes from  './App.module.css';
import List from './TrelloList/TrelloList';
import TrelloActionButton from './TrelloActionButton/TrelloActionButton';
import {sort} from './Store/Actions/ListActions';

function App() {

  const list = useSelector((state) => state);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    //Reordering logic

    const {destination, source, draggableId, type}= result;
    if(!destination){
      return;
    }

    dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ))

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div>
      <h1 style={{textAlign:'center', margin: 0}}>Trello Clone</h1>
      <Droppable droppableId='all-lists' direction='horizontal' type='list'>
          {(provided)=> (
              <div {...provided.droppableProps} ref={provided.innerRef} className={classes.home}>
              {list.map((item, index) => 
                <List key={item.id} list={item} listId={item.id} index={index}/>
              )}
              {provided.placeholder}
              <TrelloActionButton list />
            </div>
          )}
      </Droppable>
    </div>
    </DragDropContext>
  );
}

export default App;
