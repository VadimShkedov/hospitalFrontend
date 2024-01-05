import registrationRequest from "../../services/registration";
import { makeRegistration } from "../actionCreators";

export const registration = (errorCallback, login, password) => {
  return async function(dispatch) {
    try {
      const response = await registrationRequest(login, password);
      dispatch(makeRegistration({
        login: response.data.login,
        password: response.data.password
      }));
    } catch (error) {
      errorCallback(error.response.data.message);
    }
  }
}
