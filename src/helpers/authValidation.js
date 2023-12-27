const isLoginValid = (login) => {
  const trimmedLogin = login.trim();

  return trimmedLogin.length >= 6;
}

const isPasswordValid = (password) => {
  const entryRegexp = /^[a-zA-Z]{6,}\d+$/;
  const testString = entryRegexp.test(password);

  return testString;
}

export { isLoginValid, isPasswordValid }