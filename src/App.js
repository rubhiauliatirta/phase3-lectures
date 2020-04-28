import React, { useState, useEffect} from 'react';
import Form from "./components/Form"
import Item from "./components/Item"

export default function App(props) {

  //const [state, functionUntukSetState] = useState(initialValue)
  const [indomies, setIndomies] = useState([])
  const [toggle, setToggle] = useState(true)
  
  /*
  * useEffect(callbackFunction, arrayOfWatchedState)
  * callback => function yg akan jalan setiap habis render
  * arrayOfWatchedState => callback akan jalan kalau state2 yang
  * terdapat dalam array ini ada nilai yang berubah.
  * 
  * Intinya useEffect itu bukan lifecycle, melainkan "side effect",
  * By default, Effectnya akan setiap prores render selesai
  */

  //componentDidMount
  useEffect(()=> {
    console.log("componentDidMount")
    fetch("http://localhost:3001/indomies")
    .then(response => response.json())
    .then(data => {
      setIndomies(data)
    })
    .catch(err=> {
      console.log(err)
    })
  }, []) 
  /*
   * jalan cuma sekali karena dalam [] di parameter ke dua ini
   * kita tidak nge "watch" apa2
   */

  ///componentDidUpdate
  useEffect(()=>{ 
    return ()=> {
      console.log("componentDidUpdate")
    }
  }, [indomies])
  /**
    * jalan setiap ada perubahan pada state indomies
    * tapi tidak melakukan apa2 ketika render pertama kali
    * karena callbackFnctionnya tidak melakukan apa2 selain return function
    * note : kalo mau effect nya jalan ketika perubahan terjadi pada
    * salah satu dari 2 state, paramater kedua bisa dibikin
    * [indomies, toggle]
   */

  ///componentDidMount + componentDidUpdate + componentwillunmount
  useEffect(()=>{ 
    console.log("componentDidMount + componentDidUpdate")
  })
   /**
    * callback akan selalu kepanggil setelah selesai render
    * yang artinya apapun state yang berubah berarti callbacknya kepanggil
    * karena kita gak specifying parameter kedua
   */

  ///componentDidMount + componentDidUpdate
  useEffect(()=>{ 
    console.log("componentDidMount + componentDidUpdate")
  }, [toggle])
  /**
    * callback akan selalu kepanggil setiap setelah render 
    * jika ada perubahan pada state "toggle"
   */

   //component will unmount ada di component/Form.js


  function onFormSubmit(newData){
    setIndomies(indomies.concat(newData))
  } // 
  /**
   * boleh juga onFormSubmit = (newData) => {
   *  setIndomies(indomies.concat(newData))
   * }
   * gakk ada bedanya
   * */ 


  function toggleOnClick(){
    setToggle(!toggle)
  }

  return (
    <>
      <button onClick={toggleOnClick}>{toggle ? "Hide" : "Show"}</button>
      {toggle && <Form onMalikSubmit={onFormSubmit}></Form>}
      {indomies.map(indomie => (
        <Item key={indomie.id} variant={indomie.variant} type={indomie.type} />
      ))}
    </>
  )

}




