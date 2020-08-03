import React from "react"

class UserForm extends React.Component {

  constructor(){
    super()
    this.state = {
      inputUser : ""
    }

    //bind this ke function formOnSubmit
    this.formOnSubmit = this.formOnSubmit.bind(this)
  }

  /*
    formOnSubmit(event) adalah shorthand untuk 
    formOnSubmit = function(event){...} shg "this" nya nge refer ke function ini
    jika ingin menggunakan style sperti ini dan didalem
    functionnya kita manggil "this" kita harus bind dulu "this" nya
    ke function di constructor kita
  */   
  formOnSubmit(event){
    event.preventDefault()

    this.props.addUser(this.state.inputUser)
  }

  handleOnChange = (event) => {
    //console.log(event.target.value)
    this.setState({
      inputUser: event.target.value
    })
  }

  render(){
    const { inputUser } = this.state
    return (
    <form onSubmit={this.formOnSubmit}>
      {/** HARUS BACA Controlled Component https://reactjs.org/docs/forms.html#controlled-components*/}
      <input 
        type="text" 
        placeholder="New User"
        value={inputUser}
        onChange={this.handleOnChange}/>
      <input type="submit"/>
    </form>

    )
  }
}

export default UserForm