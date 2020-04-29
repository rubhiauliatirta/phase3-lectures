import React from 'react'
import {
  Link,
  Switch,
  Route,
} from 'react-router-dom'

import {
  UserDetail,
  Register
} from './index'
import {connect} from 'react-redux'

import { setLoading, setUser } from "../store/actions/usersActions";

class Users extends React.Component {
  componentDidMount(){
    this.props.setLoading(true)
    fetch('http://localhost:3001/people')
    .then( response => response.json() )
    .then( data => {
      this.props.setUser(data)
    })
    .catch(err => {
      console.log(err)
    })
    .finally( _=> {
      this.props.setLoading(false)
    })
  }
  onClick(id){
    this.props.history.replace(`${this.props.match.url}/${id}`)
  }
  render(){
    const { match, users, loading } = this.props
    return (
      <>
        <h1>Users</h1>
        <Link to={`${match.url}/register`}>Register</Link>
        {
          loading ? <p>Loading..</p> : (
            <div style={{display: "flex", flexWrap: "wrap"}}>
              { 
                users.map(user => (
                  <button 
                    style={{margin : "5px"}} 
                    onClick={() => this.onClick(user.id)} 
                    key={user.id}>{user.name}
                    </button>
                  )
                )
              }
              
            </div>
          )
        }
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

const mapStateToProps = (state) => ({ 
  users: state.usersReducer.users, 
  loading : state.usersReducer.loading 
})
const mapDispatchToProps = { setLoading, setUser } 

export default connect(mapStateToProps, mapDispatchToProps)(Users)

