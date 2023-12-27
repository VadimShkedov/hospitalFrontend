import { Link } from "react-router-dom";

import Button from "../UI/Button";
import Input from "../UI/Input";
import {
  FormTitle,
  Form,
  Footer,
  RightFooter,
  ErrorMessage
} from "./styles";

const RegistrationForm = ({
  formValues,
  handleForm,
  validateForm,
  errorMessage
}) => {
  const { login, password, repeatedPassword } = formValues;

  return (
    <Form>
      <FormTitle>Регистрация</FormTitle>
      <label htmlFor="login">Логин:</label>
      <Input value={login} onChange={handleForm} placeholder="Логин" id="login" />
      <label htmlFor="password">Пароль:</label>
      <Input value={password} onChange={handleForm} placeholder="Пароль" id="password" />
      <label htmlFor="repeatedPassword">Повторите пароль:</label>
      <Input value={repeatedPassword} onChange={handleForm} placeholder="Пароль" id="repeatedPassword" />
      <Footer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <RightFooter>
          <Button onClick={validateForm} type="button">Зарегистрироваться</Button>
          <Link to="/login">Авторизоваться</Link>
        </RightFooter>
      </Footer>
    </Form>
  );
}

export default RegistrationForm;  