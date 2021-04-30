import React from 'react';
import ReactLoading from "react-loading";
import {checkTodo, deleteTodo} from "../redux/actions";
import {useDispatch} from "react-redux";

function Todo(props) {
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleCheck = (id, completed) => {
        dispatch(checkTodo(id, completed))
    }
    const user = props.users.find(item => item.id === props.todo.userId)



    return (
        <div className='todo'>
            <div>
                {props.todo.checking ? (
                    <ReactLoading
                        type="spin"
                        color='red'
                        width={19}
                        height={19}/>
                    ) :  <input
                    type="checkbox"
                    checked={props.todo.completed}
                    onChange={() => handleCheck(props.todo.id , props.todo.completed)}
                     />
                }
            </div>
            <div className='title'>
                {props.todo.title} ({user.email})
            </div>
            <div className="button">
                <button
                    onClick={() => handleDelete(props.todo.id)}
                    disabled={props.todo.deleting}
                >
                    удалить
                </button>
            </div>
        </div>
    );
}

export default Todo;