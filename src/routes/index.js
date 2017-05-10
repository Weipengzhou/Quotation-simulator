import { Router, Route, hashHistory } from 'react-router';
import React,{Component} from 'react';
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";

import Adjustment from '../container/Adjustment';
import Configuration from '../container/Configuration';
import App from '../container/App';

import Pricesheet from '../container/Pricesheet';
import reducer from '../redux/reducer'

import configureStore from '../redux/store'

let store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default (
   <Provider store={store}>
      <Router history={hashHistory}>
          <Route path="/" component= {App} />
          <Route path="/Configuration" component={Configuration}/>
         <Route path="/Adjustment" component={Adjustment}/>
         <Route path="/Pricesheet" component={Pricesheet}/>
      </Router>
  </Provider>
)
