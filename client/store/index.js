import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import dish from './dish'
import percentage from './percentage'
import recipes from './recipes'
import modal from './modal'

const reducer = combineReducers({user, dish, percentage, recipes, modal})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './dish'
export * from './percentage'
export * from './recipes'
export * from './modal'
