import React from 'react'

export default (props) => {

  return (
    <div style={styles.div}>
      <p>{props.variant}</p>
      <p>{props.type}</p>
    </div>
  )
}

const styles = {
  div : {
    padding : "5px",
    margin : "5px",
    border : "black solid 2px"
  }
}