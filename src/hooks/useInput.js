import {useState} from 'react';

export default function useInput() {

  const [input, setInput] = useState("")

  function inputOnChange(event){
    setInput(event.target.value)
  }

  function reset(){
    setInput("")
  }

  return [input, inputOnChange, reset]
}
