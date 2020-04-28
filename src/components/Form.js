import React, {useState, useEffect} from 'react'

export default function Form(props){

  const [variant, setVariant] = useState("")
  const [type, setType] = useState("")

  //componentWillUnmount
  useEffect(()=> {
    return () => {
      console.log("componentWillUnmount")
    }
  }, [])
   /**
    * jalan setiap ada perubahan pada state indomies
    * tapi tidak melakukan apa2 ketika render pertama kali
    * karena callbackFnctionnya tidak melakukan apa2 selain return function
    * note : kalo mau effect nya jalan ketika perubahan terjadi pada
    * salah satu dari 2 state, paramater kedua bisa dibikin
    * [indomies, toggle]
   */

  function onVariantChange(event){
    setVariant(event.target.value)
  }

  function onTypeChange(event){
    setType(event.target.value)
  }

  function onSubmit(event){
    event.preventDefault()
    fetch("http://localhost:3001/indomies", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method : "POST",
      body : JSON.stringify({variant, type})
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      props.onMalikSubmit(data)
    })
    .catch(err => {
      console.log(err)
    })

  }

  return (
    <>
    <form onSubmit={onSubmit}>
      <input onChange={onVariantChange} type="text" placeholder="Variant"/>
      <input onChange={onTypeChange} type="text" placeholder="Type"/>
      <input type="submit" value="Submit"/>
    </form>
    </>
  )
}