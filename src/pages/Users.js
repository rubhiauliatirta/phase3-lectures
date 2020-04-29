import React, { useEffect } from 'react'
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

import { setLoading, setUser } from "../store/actions/usersActions";
import { useDispatch, useSelector} from 'react-redux'

export default () => {

  const dispatch = useDispatch()
  const { users, loading } = useSelector(state => state.usersReducer)

  const { path, url } = useRouteMatch()
  const history = useHistory()

  function onClick(id){
    history.push(`${url}/${id}`)
  }

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3001/people')
    .then( response => response.json() )
    .then( data => {
      dispatch(setUser(data))
    })
    .catch(err => {
      console.log(err)
    })
    .finally( _=> {
      setLoading(false)
    })
  }, [])
  
  return (
    <>
      <h1>Users</h1>
      <Link to={`${url}/register`}>Register</Link>
      {
        loading ? <p>Loading..</p> : (
          <div style={{display: "flex", flexWrap: "wrap"}}>
            { 
              users.map(user => (
                <button 
                  style={{margin : "5px"}} 
                  onClick={() => onClick(user.id)} 
                  key={user.id}>{user.name}
                  </button>
                )
              )
            }
            
          </div>
        )
      }
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