import { SET_MESSAGE } from "./types";

export function setMessage( message ){
  return {
    types : SET_MESSAGE,
    payload : message
  }
}