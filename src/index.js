import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const initialStare = {
    img: [],
    loading: false

}
const reducer = (state = initialStare, action) => {
    switch (action.type) {
        case 'start':
            return {
                ...state,
                loading: true
            }
        case 'load':
            return {
                ...state,
                img: action.payload,
                loading: false
            }
        case 'delete':
            return {
                ...state,
                img: state.img.filter(img => {
                    return img.id !== action.payload;
                })
            }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <div className='container'>
              <App />
          </div>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
