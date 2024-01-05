import { useState } from "react";
import { useDispatch } from "react-redux";
import { stringInputValidation, stringPasswordValidation } from "../../../helpers/validation";
import { registration } from "../../../store/asyncActions/registration";
import CustomInput from "../../UI/Input";
import { Container } from "./styles";
import Logo from "../../UI/Logo/Logo";
import Header from "../../UI/Header/Header";
import AuthForm from "../../AuthForm";
import logoImage from "/images/logo.svg";
import domainLogo from "/images/domain-logo.svg";

const Registration = () => {
  const dispatch = useDispatch();
  const [warningMessage, setWarningMessage] = useState("");
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    repeatedPassword: ""
  });

  const handleForm = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const validateForm = async () => {
    const { login, password, repeatedPassword } = formData;

    if (password !== repeatedPassword) {
      setWarningMessage("Пароли не совпадают");
      return;
    }

    if (!stringInputValidation(login)) {
      setWarningMessage("Недостаточная длина логина");
      return;
    }

    if (!stringPasswordValidation(password)) {
      setWarningMessage("Пароль не прошёл валидацию");
      return;
    }

    dispatch(registration(
      (errorMessage) => setWarningMessage(errorMessage),
      login,
      password
    ));
  }

  return (
    <div>
      <Header>
        <Logo src={logoImage} alt="" />
        <h1>Зарегистрироваться в системе</h1>
      </Header>
      <Container>
        <img src={domainLogo} alt="" />
        <AuthForm
          isRegistration
          validateForm={validateForm}
          errorMessage={warningMessage}
        >
          <CustomInput
            id="login"
            inputHandler={handleForm}
            inputValue={formData.login}
            labelText="Логин:"
            placeholderText="Логин" 
          />
          <CustomInput
            id="password"
            inputHandler={handleForm}
            inputValue={formData.password}
            labelText="Пароль:"
            placeholderText="Пароль" 
          />
          <CustomInput
            id="repeatedPassword"
            inputHandler={handleForm}
            inputValue={formData.repeatedPassword}
            labelText="Повторите пароль:"
            placeholderText="Пароль" 
          />
        </AuthForm>
      </Container>
    </div>
  )
}

export default Registration;