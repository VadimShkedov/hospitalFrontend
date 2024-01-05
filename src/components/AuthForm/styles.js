import styled from "styled-components"

export const Form = styled.form`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 413px;
  width: 360px;
  padding: 20px 40px;
`

export const FormTitle = styled.h1`
  padding-left: 23px;
  margin-bottom: 2rem;
`

export const Footer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`

export const RightFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > * {
    margin-bottom: 0.5rem;
  }
`

export const ErrorMessage = styled.p`
  color: red;
  min-width: 50%;
  margin: 0;
`