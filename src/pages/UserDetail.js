import React, {useState ,useEffect} from 'react'
import { 
  withRouter
} from 'react-router-dom'
import PropTypes from "prop-types";

class UserDetail extends React.Component {

  state = {
    user : {},
    loading : false
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  componentDidMount(){
    this.setState({loading : true})
    fetch(`http://localhost:3001/people/${this.props.match.params.userId}`)
    .then(response => response.json())
    .then(data => {
      this.setState({user : data})
    })
    .catch(console.log)
    .finally( _=> this.setState({loading : false}))
  }

  render() {
    if (this.loading) return <h3>loading...</h3>
    return (
      <>
      <div>id : {this.state.user.id}</div>
      <div>name : {this.state.user.name}</div>
      <div>gender : {this.state.user.gender}</div>
      <div>company : {this.state.user.company}</div>
    </>
    )
  }
}

export default withRouter(UserDetail)

