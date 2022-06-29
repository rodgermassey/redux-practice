import { combineReducers } from "redux"
import { getUserReducer } from "./getUserReducer"
const initialState = {
    userData : []
}

let id = 0

export function userReducer(state = initialState, action){
    switch(action.type){
        case "ADD_USER" : return {...state, userData:[...state.userData, {id: id++,  name:action.payload}]}
        case "DELETE_USER" : {
            state.userData.splice(action.payload,1)
            return {...state, userData:[...state.userData]}}
        default :
        return state;
    }
}

export const rootReducer = combineReducers({
    userReducer,
    getUserReducer,
})
