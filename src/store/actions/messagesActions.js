import { SET_MESSAGE } from "./types";

export function setMessage( message ){
  return {
    type : SET_MESSAGE,
    payload : message
  }
}