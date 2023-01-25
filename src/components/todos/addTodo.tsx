import React from 'react';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { addTodo } from '../../store/todoSlice';

const AddTodo : React.FC = () => {
    const [input , setInput] = useState<string>("");

    const dispatch = useDispatch<AppDispatch>()

    const submitHandler = (e : React.FormEvent) => {
        e.preventDefault();
        
        if(input !== "") {
            dispatch(
                addTodo({
                    id : Date.now(),
                    title : input,
                    is_done : false
                })
            )

            setInput("");
        }

    }

    return (
        <form onSubmit={submitHandler} className="form-inline mb-4">
            <div className="form-group d-flex">
                <input type="text" onChange={(e) => setInput(e.target.value)}  value={input} className="form-control mx-sm-3" placeholder="i want to do ..."/>
                <button type="submit" className="btn btn-primary">add</button>
            </div>
        </form>
    )
}

export default AddTodo;