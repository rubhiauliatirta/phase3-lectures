import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import User from '../components/User'
import Movie from '../components/Movie'

const GET_USERS=gql`
{
  users {
    id
    name
    age
    country
  }
  movies {
    id
    title
    release_date
  }
}
`

const ADD_USER=gql`

  mutation AddUser($newUser: newUser ){
    addUser(user: $newUser ) {
      id
      name
      age
      country
    }
  }

`

// const GET_USERS_DETAIL=gql`

//   query GetUserDetail($id : ID!) {
//     user (userId: $id) {
//       id
//       name
//       age
//       country
//     }
//   }
// `

export default function MainPage() {

  const { loading, error, data, refetch } = useQuery(GET_USERS)
  const [inputForm, setInputForm] = useState({
    name : "",
    age : 0,
    country : ""
  })
  const [addUser] = useMutation(ADD_USER)

  /** UNTUK GET SATU DATA
   * const {loading, error, data} = useQuery(GET_USERS_DETAIL, {
   *   variables : {
   *     id : "1"
   *   }
   * })
   */

  function onChange(e){

    let {name, value} = e.target 

    if(name === "age"){
      value = Number(value)
    }
    let newInputForm = {
      ...inputForm,
      [name] : value
    }

    setInputForm(newInputForm)
  }

  function onSubmit(e){
    e.preventDefault()
    addUser({
      variables : {
        newUser : inputForm
      }
    })
    refetch()
  }
  

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error {error.message}</p>

  return (
    <>
      <h1>User Data</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="name" name="name" value={inputForm.name} onChange={onChange}></input>
        <input type="number" placeholder="age" name="age" value={inputForm.age} onChange={onChange}></input>
        <input type="text" placeholder="country" name="country" value={inputForm.country} onChange={onChange}></input>
        <input type="submit" value="add"></input>
      </form>
      <div style={{
        display : "flex",
        flexWrap : "wrap"
      }}>
        {
          data.users.map(user => <User key={user.id} user={user}/>)
        }
        {/* <div>{
          JSON.stringify(data.user)
        }</div> */}

      </div>
      <h1>Movies</h1>
      {
        data.movies.map(movie => <Movie key={movie.id} movie={movie}/>)
      }
    </>
  );
}
