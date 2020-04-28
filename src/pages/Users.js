import React from 'react'
import {
  withRouter,
  Link,
  Switch,
  Route,
} from 'react-router-dom'

import {
  UserDetail,
  Register
} from './index'

const ids = [1,2,3,4,5]

class Users extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props, "props")
  }
  onClick(id){
    this.props.history.replace(`${this.props.match.url}/${id}`)
  }
  render(){
    const { match } = this.props
    return (
      <>
        <h1>Users</h1>
        <Link to={`${match.url}/register`}>Register</Link>
        <div style={{display: "flex"}}>
          {ids.map(id => <button onClick={() => this.onClick(id)} key={id}>User {id}</button>)}
        </div>
        <Switch>
          <Route path={`${match.path}/register`}>
            <Register/>
          </Route>
          <Route path={`${match.path}/:userId`} component={() => <UserDetail/>}>
         
          </Route>
        </Switch>
      </>
    )
  }
}

export default Users

