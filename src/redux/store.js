import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //esta linea es paa conectar con la extension del navegador => Redux devtools

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)) //esta linea es para poder hacer peticiones a un servidor
);

export default store;
