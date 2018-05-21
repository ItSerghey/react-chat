import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

export default function configureStore(){

  if(process.env.NODE_ENV==='production'){
    return createStore(
      rootReducer,
      applyMiddleware(thunkMiddleware)
    )
  }else{
    return createStore(
      rootReducer,
      applyMiddleware(thunkMiddleware,loggerMiddleware)
    )
  }
  
}
