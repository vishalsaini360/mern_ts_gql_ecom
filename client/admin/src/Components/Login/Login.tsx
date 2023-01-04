import {
    Wrapper, Form, H1, DivInput,
    Label, Button2, Input, ErrorP, Form2
  } from './Login.style'
  import { useFormik } from 'formik'
import { Schemas } from './Schema/Schema'
  
const initialValues = {
    email:"",
    password:"",
  }

  export default function Login() {
    const {values,errors,touched,handleChange,handleSubmit}=
    useFormik({
        initialValues,
        validationSchema:Schemas,
        onSubmit:(values,action)=>{
        console.log("values : ",values);
        alert("form Submited")
        action.resetForm();
        }
    })
    console.log("errors : ",errors);
    return (
      <>
        <Wrapper>
          <Form onSubmit={handleSubmit}>
            <Form2>
              <H1>Login</H1>
              <DivInput>
                <Label>Email address</Label>
                <Input type='email' value={values.email} name="email" onChange={handleChange} />
                <ErrorP>
                    {errors.email && touched.email ? (
                        <ErrorP>{errors.email}</ErrorP>
                     ) : null}
                </ErrorP>
              </DivInput>
              <DivInput>
                <Label>Password</Label>
                <Input type='password' value={values.password} name="password" onChange={handleChange} />
                <ErrorP>
                    {errors.password && touched.password ? (
                        <ErrorP>{errors.password}</ErrorP>
                     ) : null}
                </ErrorP>
              </DivInput>
              <DivInput>
                <Button2 type='submit'>SIGN IN</Button2>
              </DivInput>
            </Form2>
          </Form>
        </Wrapper>
      </>
    )
  }
  