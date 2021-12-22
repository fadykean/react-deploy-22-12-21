import { productReducer } from './reducers/productReducer'
import { userReducer } from './reducers/userReducer'
import { settingReducer } from './reducers/settingReducer'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
// Only if you have a number of reducers:
const rootReducer = combineReducers({
    productReducer,
    userReducer,
    settingReducer
})
// This is only for the redux dev tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))