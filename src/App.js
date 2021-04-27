import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkTodo, loadTodo} from "./actions";
import {deleteTodo} from "./actions";
import Header from "./Header";

function App() {
  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadTodo())
  },[])

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleCheck = (id, completed) => {
    dispatch(checkTodo(id, completed))
  }
  return (
    <div>
      <Header />
      {loading ? ' собр...' : (
          todos.map(todo => {
            return (
                <div className='todo'>
                  <div>
                    <input type="checkbox" checked={todo.completed} onChange={() => handleCheck(todo.id , todo.completed)}/>
                  </div>
                  <div className='title'>
                    {todo.title}
                  </div>
                  <div className="button">
                    <button onClick={() => handleDelete(todo.id)} >удалить</button>
                  </div>
                </div>
            )
          })
        )}

    </div>
  );
}

export default App;
