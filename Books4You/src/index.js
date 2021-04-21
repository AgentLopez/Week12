import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { combineReducers, createStore } from 'redux'

import { Provider } from 'react-redux'
import Template from './Components/Template'
import Login from './Components/Login';
import Register from './Components/Register';
import AddBook from './Components/AddBook';
import EditBook from './Components/EditBook';
import authReducer from './store/auth'
import cartReducer from './store/cart'
import favReducer from './store/fav'

const rootReducer = combineReducers({
  authR: authReducer,
  cartR: cartReducer,
  favR: favReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>

    <BrowserRouter>
      <Template>
        <Switch>
          <Route path = '/login' component = {Login} />
          <Route path = '/register' component = {Register} />
          <Route exact path = '/' component = {App} />
          <Route path = '/Add-Book' component = {AddBook} />
          <Route path = '/EditBook/:BookId' component = {EditBook} />
        </Switch>
      </Template>
    </BrowserRouter>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
