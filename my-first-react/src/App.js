import React from 'react';
import UserList from "./components/UserList"
import UserForm from "./components/UserForm"
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      dataString: "Message string biasa",
      dataObject: {
        id: 4,
        todos : "belajar react"
      },
      users : [
        {
          id: 1,
          name: "Rubhi"
        },
        {
          id: 2,
          name : "Caca"
        }
      ]
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      this.setState({
        users: data
      })
    })
  }

  /** 
   * paling aman kalo class component bikin function
   * untuk event handling pakai style sperti ini (pakai arrow function)
   */
  addUser = (username) => {
    const newUser = {
      id : this.state.users.length + 1,
      name : username
    }

    this.setState({
      users: this.state.users.concat(newUser) 
    })
  }



  render(){
    const { dataString, users, dataObject } = this.state

    return (
      <>
        <h1>Users</h1>
        <p>{dataString}</p>
        {/* <div>{dataObject}</div> ini pasti error karena dia gak bisa render object literal. Harus di convert menjadi string pake JSON.stringify*/ } 
        <p>{JSON.stringify(dataObject)}</p>
        <UserForm addUser={this.addUser}/>
        <UserList users={users}/> 
      </>
    )
      
  }
}

export default App;
