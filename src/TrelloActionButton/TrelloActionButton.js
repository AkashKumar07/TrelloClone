import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import TextArea from 'react-textarea-autosize';
import {AddList, AddCard} from '../Store/Actions/ListActions';

import * as classes from './TrelloActionButton.module.css';

const TrelloActionButton = (props) => {
    const [formOpen, setFormOpen] = useState(false);
    const [value, setValue] = useState();

    const dispatch = useDispatch();

    const toggleFormOpen = () => {
        setFormOpen(!formOpen);
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    }

    const handleAddList = () => {
        if(value){
            dispatch(AddList(value));
        }
        setValue();
        return;
    }

    const handleAddCard = (id) => {
        if(value){
            dispatch(AddCard(id,value));
        }
        setValue()
        return;
    }

    const buttonText = props.list ? 'Add another list' : 'Add another card';
    const buttonTextOpacity = props.list ? 1 : 0.5;
    const buttonTextColor = props.list ? 'white' : 'inherit';
    const buttonTextBackground = props.list ? 'rgba(0,0,0,0.15)' : "inherit";

    const AddButton = <div onClick={toggleFormOpen} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            opacity: buttonTextOpacity,
                            color: buttonTextColor,
                            backgroundColor: buttonTextBackground,
                            paddingLeft : '10px',
                            width: '240px',
                            cursor: 'pointer',
                            height: '35px'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent : 'center',
                                alignItems : 'center'
                            }}>
                            <AddIcon fontSize="small" />
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center'
                            }}>
                            <p style={{margin: 0, width: '220px'}}>{buttonText}</p>
                            </div>
                        </div>

    const placeholder = props.list ? 'Add list' : 'Enter the title for your card';
    const buttonTitle = props.list ? 'Add List' : 'Add Card';

    const RenderForm =  <div >
                            <div className={classes.card} style={{minHeight: '85px'}}>
                                <TextArea placeholder={placeholder} autoFocus
                                onBlur={toggleFormOpen}
                                value={value}
                                onChange={onChangeHandler}
                                style={{
                                    resize: 'none',
                                    width: '100%',
                                    outline: 'none',
                                    border: 'none'
                                }}/>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <button onMouseDown={props.list ? handleAddList : () => handleAddCard(props.id)} className={classes.Button}>{buttonTitle}</button>
                                <div style={{
                                    display: 'flex',
                                    flexDirection : 'center',
                                    alignItems : 'center'
                                }}>
                                <CloseIcon />
                                </div>
                            </div>
                        </div>
    
    return(
        <React.Fragment>
        {formOpen ? RenderForm : AddButton}
        </React.Fragment>
    )
}

export default TrelloActionButton;