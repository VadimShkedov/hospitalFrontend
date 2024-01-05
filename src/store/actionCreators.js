import { MAKE_REGISTRATION } from "./actionTypes"

export const makeRegistration = (payload) => {
  return {
    type: MAKE_REGISTRATION, payload
  }
}