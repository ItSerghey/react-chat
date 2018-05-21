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
    const store=  createStore(
      rootReducer,
      applyMiddleware(thunkMiddleware,loggerMiddleware)
    )

    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducer)
      })}

      return store;
  }
  
}
