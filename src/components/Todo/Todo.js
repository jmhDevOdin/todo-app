import { Button, Input, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import './Todo.css';
import db from '../../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input,
        }, { merge: true})

        setOpen(false);
    }

    return (
      <>
        <Modal
          className="todo__modal"
          open={open}
          onClose={(e) => setOpen(false)}
        >
          <div className={classes.paper}>
            <input
              placeholder={props.todo.todo}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button variant="contained" onClick={updateTodo}>
              Update Todo
            </Button>
          </div>
        </Modal>
        <List>
          <ListItem className="todo__listItem">
            <ListItemAvatar></ListItemAvatar>
            <ListItemText
              primary={props.todo.todo}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => setOpen(true)}
            >
              Edit
            </Button>
            <DeleteForeverIcon
              className="todo__delete"
              onClick={(event) => {
                db.collection("todos").doc(props.todo.id).delete();
              }}
            />
          </ListItem>
        </List>
      </>
    );
}

export default Todo;
