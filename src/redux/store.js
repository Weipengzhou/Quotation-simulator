import {applyMiddleware,createStore,compose} from 'redux';
import  reducer from './reducer';
import thunk from 'redux-thunk';


export default function configureStore(init) {

  const store = createStore(reducer,init,applyMiddleware(thunk));

  return store;
}
