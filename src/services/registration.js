import $api from "../http";

const registrationRequest = async (login, password) => {
  return await $api.post('/registration', { login, password });
}

export default registrationRequest;