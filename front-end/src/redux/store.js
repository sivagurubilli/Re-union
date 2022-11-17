import {applyMiddleware,combineReducers, legacy_createStore,compose} from "redux"

import thunk from "redux-thunk"

import {reducer as datareducer} from "./DataReducer/reducer"

const rootreducer = combineReducers({datareducer})
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;


export const store = legacy_createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))