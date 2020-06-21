import React, {useEffect} from 'react';

export default function User(props) {

  const { title, release_date } = props.movie

  return (
    <div style={{
      margin: "1rem",
      padding: "2rem",
      border : "solid black 1px"
    }}>
      <div>{title}</div>
      <div>{release_date}</div>
    </div>
  );
}
