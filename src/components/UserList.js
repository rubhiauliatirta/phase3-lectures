import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../store/actions/userActions'
import { addVote } from '../store/actions/voteActions'

class UserList extends Component {

  componentDidMount(){
    this.props.setUser()
  }

  onClick = (event) => {
    event.preventDefault()
    this.props.addVote()
  } 


  render() {

    const { users, totalVote } = this.props
    return (
    
      <>
        <h4>Total vote masuk : {totalVote}</h4>
        <h3>User list:</h3>
        <ul>
        {
          users.map(user => (
            <li key={user.id}>
              <a href="" onClick={this.onClick}>{user.name}</a>
            </li>))
        }
        </ul>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    users : state.userReducer.users,
    totalVote : state.voteReducer.totalVote
  }
}
/**
 * ini padanannya dengan hooks
 * const users = useSelector(state => state.userReducer.users)
 * manggil state dari component dengan cara:
 * this.props.users => class component
 * props.users => function component
 */

const mapDispatchToProps = {
  setUser,
  addVote
}
/**
 * ini istilahnya kita bikin map action dengan bentuk object (object form)
 * ada lagi dia pake function tapi dokumentasinya nyaranin pake object from seperti diatas.
 * https://react-redux.js.org/using-react-redux/connect-mapdispatch
 * 
 * manggilnya dari component
 * this.props.setUser() => class component
 * props.setUser() => function component
 * 
 * dengan memanggil action creator diatas, berkat curry function connect() dibawah
 * dia otomatis kayak kita manggil dispatch(setUser())
 */


export default connect(mapStateToProps, mapDispatchToProps)(UserList)
/**
 * si function connect ini tugasnya meng-connectkan store dengan component kita
 * dengan menginjeksikan state dan action yang kita butuhkan
 * kedalam props dari component kita makanya nama variablenya
 * map state to props dan map action to props
 * tapi nama variabelnya sebenarnya bebas
 */