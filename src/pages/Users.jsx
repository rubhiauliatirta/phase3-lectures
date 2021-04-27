import React from "react";
import useFetch from "../hooks/useFetch";

export default function Users() {
  const { loading, error, data: users } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  ); // [users, loading, error]

  if (loading) {
    return <h1>Loading.....</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h1>Users List</h1>
      {/* <h1>{users[0]?.name}</h1> */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
