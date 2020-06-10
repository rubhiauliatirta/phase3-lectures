import React, { useState } from 'react';
import {connect} from 'react-redux'
import { addUser } from "../store/actions/userActions";

 function AddUserForm(props) {

  const [name, setName] = useState("")

  function onChange(event){
    setName(event.target.value)
  }
  function onSubmit(event){
    event.preventDefault()
    props.addUser({ name })
    setName("")
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={onChange}/>
      <input type="submit" value="Add" />
    </form>
  );
}

const mapActionsToProps = {
  addUser
}

export default connect(null, mapActionsToProps)(AddUserForm) 
