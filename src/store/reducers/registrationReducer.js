import { MAKE_REGISTRATION } from "../actionTypes";

const defaultState = {
  login: "",
  password: ""
}

export const registrationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MAKE_REGISTRATION:
      return { login: action.payload.login, password: action.payload.password }
    default:
      return state;
  }
}