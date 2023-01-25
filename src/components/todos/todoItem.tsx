import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Todo from '../../models/todo';
import { AppDispatch } from '../../store';
import { deleteTodo, toggleTodo } from '../../store/todoSlice';
import EditTodo from './editTodo';

interface Props {
    todo : Todo
}

const TodoItem : React.FC<Props> = ({ todo }) => {
    const [editStatus , setEditStatus ] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();

    const deleteHandler = () => {
        dispatch(
            deleteTodo(todo.id)
        )
    }
    
    const toggleHandler = () => {
        dispatch(
            toggleTodo(todo.id)
        )
    }

    return (

        ! editStatus
            ? <div className="col-6 mb-2">
                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                    <div onClick={toggleHandler} style={{ textDecoration : todo.is_done ? 'line-through' : 'none'}}>
                        {todo.title}
                    </div>
                    <div>
                        <button type="button" className="btn btn-info btn-sm" onClick={(e) => setEditStatus(true)}>edit</button>
                        <button type="button" className="btn btn-danger btn-sm ml-1" onClick={deleteHandler}>delete</button>
                    </div>
                </div>
            </div>
            : <EditTodo todo={todo} setEditStatus={setEditStatus}/>
    )
}


export default TodoItem;