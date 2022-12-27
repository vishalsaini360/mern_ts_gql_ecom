import {
  Wrapper, Div, Span, FA, Form, H1, DivInput,
  Label, Button, Button2, Input, ErrorP, Form2
} from './Login.style'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Login() {
  const initialValue = {email:"",password:""};
  const [formData, setFormData] = useState(initialValue);
  const [isFormData, setIsFormData] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");

  function handleChange(e: { target: { name: any; value: any; }; }) {
    const {name,value} = e.target;
    const regex =  /^[^s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    setFormData({...formData,[name]:value})
      if(!regex.test(formData.email)){
        setEmailError("This is nat a valid email format")
      }else{
        setEmailError("")
        setIsFormData(true)
      }
    if(formData.password){
      setPasswordError("")
      setIsFormData(true)
    }
    console.log(formData)
  }

  const handleSubmit = (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    if(!formData.email){
      setEmailError("email is required feild")
    }
    if(!formData.password){
      setPasswordError("password is required feild")
    }
    if(isFormData){
      alert("form submitted...")
    }
  }
  return (
    <>
      <Wrapper>
        <Div>
          <Span>Home</Span>
          <FA className="fa fa-angle-right"></FA>
          <Span>Login</Span>
        </Div>
        <Form onSubmit={handleSubmit}>
          <Form2>
            <H1>Login</H1>
            <DivInput>
              <Label>Email address</Label>
              <Input type='email' value={formData.email} name="email" onChange={handleChange} />
              <ErrorP>{emailError}</ErrorP>
            </DivInput>
            <DivInput>
              <Label>Password</Label>
              <Input type='password' value={formData.password} name="password" onChange={handleChange} />
              <ErrorP>{PasswordError}</ErrorP>
            </DivInput>
            <DivInput>
              <Button2 type='submit'>SIGN IN</Button2>
            </DivInput>
            <DivInput>
              <NavLink to='/signup'>
                <Button>CREATE AN ACCOUNT</Button>
              </NavLink>
            </DivInput>
          </Form2>
        </Form>
      </Wrapper>
    </>
  )
}

