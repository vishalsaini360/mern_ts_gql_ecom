import {Form, Wrapper,FormWrapper, Input, Button,Label,H2, P} from './CreateCategory.style'
import { useFormik } from 'formik'
import { CategorySchemas } from '../../../Schema/Schema';

import { useMutation } from '@apollo/client';
import { CREATE_CATEGORY } from '../../../gqlOperations/mutations'


const initialValues = {
  name:"",
  image:"",
}

function CreateCategory() {
  const [createCategory,{error,loading,data}] = useMutation(CREATE_CATEGORY,{
    refetchQueries:[
        `getCategories`
    ]
})

// if(loading) return <h1>Loading</h1>

  const {values,errors,touched,handleChange,handleSubmit}=
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFormik({
        initialValues,
        validationSchema:CategorySchemas,
        onSubmit:(values,action)=>{
        // console.log("values : ",values);
        // alert("form Submited")
        createCategory({
          variables:{
            CreateCategoryInput:values
          }
      })
        action.resetForm();
        }
    })
    // console.log("errors : ",errors);
  return (
    <>
     <Wrapper>
        <Form onSubmit={handleSubmit}>
            <H2>Category</H2>
            <FormWrapper>
                <Label>Category Name</Label>
                <Input value={values.name} name="name" onChange={handleChange} type="text" />
                <P>{errors.name}</P>
            </FormWrapper>
            <FormWrapper>
            <Label>Category Image</Label>
                <Input value={values.image} name="image" onChange={handleChange} type="text" />
                <P>{errors.image}</P>
                {/* <Input value={values.image} name="image" onChange={handleChange} type="file" /> */}
                {/* <P>{errors.image}</P> */}
            </FormWrapper>
            <Button type='submit'>Add Category</Button>
        </Form>
    </Wrapper>
    </>
  )
}

export default CreateCategory