import { Form, FormTitle, Button, Input } from './styles';

const RegistrationForm = () => {
  return (
    <Form>
      <FormTitle>Регистрация</FormTitle>
      <label htmlFor="login">Логин:</label>
      <Input placeholder="Логин" id="login" />
      <label htmlFor="password">Пароль:</label>
      <Input placeholder="Пароль" id="password" />
      <label htmlFor="repeatLogin">Повторите пароль:</label>
      <Input placeholder="Пароль" id="repeatLogin" />
      <Button>Зарегистрироваться</Button>
    </Form>
  )
}

export default RegistrationForm;