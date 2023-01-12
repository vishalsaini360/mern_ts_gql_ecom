import {
    Wrapper, Form, H1, DivInput,
    Label, Button2, Input, ErrorP, Form2
  } from './Login.style'
  import { useFormik } from 'formik'
import { Schemas } from './Schema/Schema'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGIN_ADMIN } from '../../gqlOperations/mutations'
  
const initialValues = {
    email:"",
    password:"",
  }

  export default function Login() {
    const navigate = useNavigate()
    const [adminLogin,{error,loading,data}] = useMutation(LOGIN_ADMIN,{
      onCompleted(data){
          localStorage.setItem('token',data.admin.jwt)
          navigate('/admin/dashboard')
      }
  })
  // if(loading) return <h1>Loading</h1>

    const {values,errors,touched,handleChange,handleSubmit}=
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFormik({
        initialValues,
        validationSchema:Schemas,
        onSubmit:(values,action)=>{
        // console.log("values : ",values);
        // alert("form Submited")
        adminLogin({
          variables:{
            AdminLoginInput:values
          }
      })
        }
    })
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
              <ErrorP>
                    {(error) ? (
                        <ErrorP>{error.message}</ErrorP>
                     ) : null}
                </ErrorP>
               <Button2 type='submit'>SIGN IN</Button2>
              </DivInput>
            </Form2>
          </Form>
        </Wrapper>
      </>
    )
  }
  