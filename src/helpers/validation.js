const stringInputValidation = (login) => {
  const trimmedLogin = login.trim();

  return trimmedLogin.length >= 6;
}

const stringPasswordValidation = (password) => {
  const entryRegexp = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;
  const testString = entryRegexp.test(password);

  return testString;
}

export { stringInputValidation, stringPasswordValidation }