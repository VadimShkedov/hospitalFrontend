import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import { authFormConstants } from "./constants";
import {
  FormTitle,
  Form,
  Footer,
  RightFooter,
  ErrorMessage
} from "./styles";

const AuthForm = ({
  isRegistration,
  validateForm,
  errorMessage,
  children
}) => {
  const formType = useRef(
    isRegistration ?
      authFormConstants.registration :
      authFormConstants.authorization
  )

  return (
    <Form>
      <FormTitle>{formType.current.title}</FormTitle>
      {children}
      <Footer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <RightFooter>
          <Button onClick={validateForm} type="button">{formType.current.buttonText}</Button>
          {isRegistration && <Link to="/login">{formType.current.link}</Link>}
        </RightFooter>
      </Footer>
    </Form>
  );
}

export default AuthForm;  