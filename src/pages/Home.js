import React from 'react'
import { connect } from 'react-redux'
import { setMessage } from "../store/actions/messagesActions";

class Home extends React.Component {

  changeMessage(){
    this.props.setMessage("I can change you from home")
  }
  render(){
    return (
    <>
      <h1>Welcome to Home Page</h1> 
      <h4>{this.props.message}</h4>
      <button onClick={() => this.changeMessage()}>Change</button>
    </>
    )
  }
}

//disini kita "map" atau inject state dan action kita menjadi props dari component home
const mapStateToProps = (state) => ({ message: state.messagesReducer.message }) // sama aja kayak useSelector tadi
const mapDispatchToProps = { setMessage } //object form, ada juga function form,tapi disaranin dokum pake object form

export default connect(mapStateToProps, mapDispatchToProps)(Home)