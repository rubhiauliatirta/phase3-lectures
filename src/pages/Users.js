import React from 'react'
import {
  useRouteMatch,
  Link,
  Switch,
  Route,
  useHistory
} from 'react-router-dom'

import {
  UserDetail,
  Register
} from './index'

const ids = [1,2,3,4,5]

export default () => {
  const {path, url} = useRouteMatch()

  const history = useHistory()

  function onClick(id){
    history.push(`${url}/${id}`)
  }
  
  return (
    <>
      <h1>Users</h1>
      <Link to={`${url}/register`}>Register</Link>
      <div style={{display: "flex"}}>
        {ids.map(id => <button onClick={() => onClick(id)} key={id}>User {id}</button>)}
      </div>
      <Switch>
        <Route path={`${path}/register`}>
          <Register/>
        </Route>
        <Route path={`${path}/:userId`}>
          <UserDetail/>
        </Route>
      </Switch>
    </>
  )
}