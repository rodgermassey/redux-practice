import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from './actions/deleteUser';
import { addUser } from './actions/addUser';

function mapStateToProps(state){
  return {data: state.userData}
}

// function mapDispatchToProps(dispatch){
//   return{
//     deleteUser: (id)=>{dispatch(deleteUser(id))},
//     addUser: (name)=>{dispatch(addUser(name))}
//   }
// }

function App(props) {
  const [name, setName] = React.useState('')
  function handleAction(event){
    props.addUser(name)}

  function handleDeleteUser(id){
    props.deleteUser(id)
  }
    
  return (
    <div className="App">
      <h1>Hello this is Redux Practice</h1>
      <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}}/>
      <button onClick={handleAction}>Add User</button>
     
      <br/>
      {props.data.map((item,index)=>{
        return (<>
          <span key={item.id}>{item.name}</span> <button onClick={()=>{handleDeleteUser(index)}}>Delete User</button>
          <br/>
        </>)
      })}
    </div>
  );
}

export default connect(mapStateToProps, {addUser, deleteUser})(App);
