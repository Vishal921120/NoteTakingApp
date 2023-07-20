import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import userReducer from  "./user/user.reducer"

let rootReducer = combineReducers({
    userReducer:userReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))