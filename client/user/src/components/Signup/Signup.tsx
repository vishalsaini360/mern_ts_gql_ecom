import { useFormik } from 'formik'
import { Schemas } from './Schemas/Schemas'
import {Wrapper, Div, Span, FA, FormWrapper, H1, DivInput,
  Label, Button2, Input, ErrorP, Form} from './Signup.style'

  const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  }
export default function Signup() {
  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=
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
        <Div>
          <Span>Home</Span>
          <FA className="fa fa-angle-right"></FA>
          <Span>Register</Span>
        </Div>
        <Form onSubmit={handleSubmit}>
          <FormWrapper>
            <H1>Register</H1>
            <DivInput>
              <Label>First name</Label>
              <Input name='firstName'
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.firstName}
                     />
                    {errors.firstName && touched.firstName ? (
                        <ErrorP>{errors.firstName}</ErrorP>
                     ) : null}
            </DivInput>
            <DivInput>
              <Label>Last name</Label>
              <Input name='lastName'
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.lastName}/>
                     {errors.lastName && touched.lastName ? (
                        <ErrorP>{errors.lastName}</ErrorP>
                     ) : null}
            </DivInput>
            <DivInput>
              <Label>Email address</Label>
              <Input type="email"
                    name='email'
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.email}/>
                    {errors.email && touched.email ? (
                        <ErrorP>{errors.email}</ErrorP>
                     ) : null}
            </DivInput>
            <DivInput>
              <Label>Password</Label>
              <Input type="password" 
                     name='password' 
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}/>
                    {errors.password && touched.password ? (
                        <ErrorP>{errors.password}</ErrorP>
                     ) : null}
            </DivInput>
            <DivInput>
              <Label>Confirm Password</Label>
              <Input type="password"
                     name='confirmPassword'
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.confirmPassword}/>
                     {errors.confirmPassword && touched.confirmPassword ? (
                        <ErrorP>{errors.confirmPassword}</ErrorP>
                     ) : null}
            </DivInput>
            <DivInput>
              <Button2 type='submit'>CREATE</Button2>
            </DivInput>
          </FormWrapper>
        </Form>
      </Wrapper>
    </>
  )
}
