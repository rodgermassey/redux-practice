export function deleteUser(id){
    return {
        type: 'DELETE_USER',
        payload: id
    }
}