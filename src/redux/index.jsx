import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger/src'
import { idReducer } from './searchId'
import { ticketsReducer } from './tickets'

const logger = createLogger({
  diff: true,
  collapsed: true
});

const reducer = combineReducers({
  id: idReducer,
  tickets: ticketsReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;