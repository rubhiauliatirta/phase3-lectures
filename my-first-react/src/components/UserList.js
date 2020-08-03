import React, { Component } from 'react'

export default class UserList extends Component {
  render() {

    const { users } = this.props

    return (
        <ul>
        {
          /** jika menggunakan curly brackets {} JANGAN LUPA RETURN */
          users.map(user => {
            return <li key={user.id}>{user.name}</li>
          })
          /* ekuivalen dengan parenthess ()
            users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))
          */
        }
        </ul>
    )
  }
}
