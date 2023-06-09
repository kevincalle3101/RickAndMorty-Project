import {createStore, compose, applyMiddleware} from "redux"; //creo las importaciones principales para crear mi store,
import thunkMiddleware from "redux-thunk";
import reducer from './reducer'
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose; 

const store = createStore(reducer,composeEnhancer(applyMiddleware(thunkMiddleware)) )

export default store;
