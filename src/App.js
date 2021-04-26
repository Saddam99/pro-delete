import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadImg} from "./actions";
import {deleteImg} from "./actions";

function App() {
  const todos = useSelector(state => state.img);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadImg())
  },[])

  const handleDelete = (id) => {
    dispatch(deleteImg(id))
  }
  return (
    <div>
      <div>Картинки:</div>
      {loading ? ' собр...' : (
          todos.map(img => {
            return (
                <div className='position'>
                  <img className='image' src={img.url} alt=""/>
                  <div className="button">
                    <button onClick={() => handleDelete(img.id)} >удалить</button>
                  </div>
                </div>
            )
          })
        )}

    </div>
  );
}

export default App;
