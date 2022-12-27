import {Wrapper, Div, Span, FA, Form, H1, DivInput,
  Label, Button,Button2, Input, ErrorP, Form2} from './Login.style'
  import {NavLink} from 'react-router-dom';

export default function Login() {
  return (
    <>
<Wrapper>
        <Div>
          <Span>Home</Span>
          <FA className="fa fa-angle-right"></FA>
          <Span>Login</Span>
        </Div>
        <Form2>
          <Form>
            <H1>Login</H1>
            <DivInput>
              <Label>Email address</Label>
              <Input />
                <ErrorP></ErrorP>
            </DivInput>
            <DivInput>
              <Label>Password</Label>
              <Input  />
                <ErrorP></ErrorP>
            </DivInput>
            <DivInput>
              <Button2 type='submit'>SIGN IN</Button2>
            </DivInput>
            <DivInput>
              <NavLink to='/signup'>
              <Button>CREATE AN ACCOUNT</Button>
              </NavLink>
            </DivInput>
          </Form>
        </Form2>
      </Wrapper>
    </>
  )
}
