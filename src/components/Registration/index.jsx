import { 
  Content,
  Header,
  Title,
  FormTitle,
  Logo,
  Form,
  Input,
  Button,
} from "./styles";
import logo from '/images/logo.svg';
import domainLogo from '/images/domain-logo.svg';

const Registration = () => {
  return (
    <div>
      <Header>
        <Logo src={logo} alt="" />
        <Title>Зарегистрироваться в системе</Title>
      </Header>
      <Content>
        <img src={domainLogo} alt="" />
        <Form>
          <FormTitle>Регистрация</FormTitle>
          <label htmlFor="login">Логин:</label>
          <Input placeholder="Логин" type="text" id="login" />
          <label htmlFor="login">Пароль:</label>
          <Input placeholder="Пароль" type="text" id="login" />
          <label htmlFor="repeatLogin">Повторите пароль:</label>
          <Input placeholder="Пароль" type="text" id="repeatLogin" />
          <Button>Зарегистрироваться</Button>
        </Form>
      </Content>
    </div>
  )
}

export default Registration;