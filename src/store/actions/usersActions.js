import { SET_USERS, SET_USERS_LOADING } from "./types";

export const setUser = (users) => {
  return {
    type : SET_USERS,
    payload : users
  }
}

export const setLoading = (value) => {
  return {
    type : SET_USERS_LOADING,
    payload : value
  }
}