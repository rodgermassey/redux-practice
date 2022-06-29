export function getUser(){
    return async function (dispatch){
       let response = await fetch('https://jsonplaceholder.typicode.com/users')
       let data = await response.json()
       dispatch({
           type: "GET_USER",
           payload: data,
       })
    }
}