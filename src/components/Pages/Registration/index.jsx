import { useState } from "react";

import { isLoginValid, isPasswordValid } from "../../../helpers/authValidation";
import registrationRequest from "../../../service/registration";
import { Content } from "./styles";
import Logo from "../../UI/Logo";
import Header from "../../UI/Header";
import RegistrationForm from "../../RegistrationForm";
import logoImage from "/images/logo.svg";
import domainLogo from "/images/domain-logo.svg";

const Registration = () => {
  const [warningMessage, setWarningMessage] = useState("");
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    repeatedPassword: ""
  });
 
  const handleForm = (e) => setFormData({...formData, [e.target.id]: e.target.value });

  const validateForm = async () => {
    const { login, password, repeatedPassword } = formData;

    if (password !== repeatedPassword) {
      setWarningMessage("Пароли не совпадают");
      return;
    }

    if (!isLoginValid(login)) {
      setWarningMessage("Недостаточная длина логина");
      return;
    }

    if (!isPasswordValid(password)) {
      setWarningMessage("Пароль не прошёл валидацию");
      return;
    }

    try {
      const response = await registrationRequest(login, password);
      
    } catch (error) {
      
    }


  }

  return (
    <div>
      <Header>
        <Logo src={logoImage} alt="" />
        <h1>Зарегистрироваться в системе</h1>
      </Header>
      <Content>
        <img src={domainLogo} alt="" />
        <RegistrationForm
          formValues={formData} 
          handleForm={handleForm}
          validateForm={validateForm}
          errorMessage={warningMessage}
        /> 
      </Content>
    </div>
  )
}

export default Registration;