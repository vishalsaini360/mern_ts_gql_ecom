import {Wrapper, Div, Span, FA, Form, H1, DivInput,
  Label, Button2, Input, ErrorP, Form2} from './Signup.style'

export default function Signup() {
  return (
    <>
<Wrapper>
        <Div>
          <Span>Home</Span>
          <FA className="fa fa-angle-right"></FA>
          <Span>Register</Span>
        </Div>
        <Form2>
          <Form>
            <H1>Register</H1>
            <DivInput>
              <Label>First name</Label>
              <Input />
                <ErrorP ></ErrorP>
            </DivInput>
            <DivInput>
              <Label>Last name</Label>
              <Input />
                <ErrorP ></ErrorP>
            </DivInput>
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
              <Button2 type='submit'>CREATE</Button2>
            </DivInput>
          </Form>
        </Form2>
      </Wrapper>
    </>
  )
}
