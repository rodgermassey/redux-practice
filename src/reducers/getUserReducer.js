const initialState=[]

export function getUserReducer(state=initialState, action){
    switch(action.type){
        case 'GET_USER': return [...action.payload]
        default: return state
    }
}