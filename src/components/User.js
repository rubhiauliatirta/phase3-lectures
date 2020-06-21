import React, {useEffect} from 'react';

export default function User(props) {

  const { name, age, country} = props.user

  return (
    <div style={{
      margin: "1rem",
      padding: "2rem",
      border : "solid black 1px"
    }}>
      <div>{name}</div>
      <div>{age}</div>
      <div>{country}</div>
    </div>
  );
}
