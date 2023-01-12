import { Form, Wrapper, FormWrapper, Input, Button, Label, H2, Select, Option, FormWrapper2,P } from './CreateSubCategory.style'

import { useFormik } from 'formik'
import { SubCategorySchemas } from '../../../Schema/Schema';

import { useMutation } from '@apollo/client'
import { CREATE_SUBCATEGORY } from '../../../gqlOperations/mutations'

import CategoryList from '../CategoryList/CategoryList';

const initialValues = {
  categoryId: "",
  name: "",
  image: "",
}
export default function CreateSubCategory() {

  const [createSubCategory,{error,loading,data}] = useMutation(CREATE_SUBCATEGORY,{
    refetchQueries:[
        `getSubCategories`
    ]
})

  const { values, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: SubCategorySchemas,
      onSubmit: (values, action) => {
        // console.log("values : ",values);
        // alert("form Submited")
        createSubCategory({
            variables:{
              CreateSubCategoryInput:values
            }
        })
        console.log('values',values)
        action.resetForm();
      }
    })

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <H2>Sub Category</H2>
          <FormWrapper>
            <Label>SubCategory Name</Label>
            <Input value={values.name} name="name" onChange={handleChange} type="text" />
            <P>{errors.name}</P>
          </FormWrapper>
          <FormWrapper>
            <Label>SubCategory Image</Label>
            {/* <Input type="file" /> */}
            <Input value={values.image} name="image" onChange={handleChange} type="text" />
            <P>{errors.image}</P>
          </FormWrapper>
          <FormWrapper2>
            <Label>Category</Label>
            <Select value={values.categoryId} name="categoryId" onChange={handleChange}>
              <Option>---Select Category---</Option>
              <CategoryList/>
            </Select>
            <P>{errors.categoryId}</P>
          </FormWrapper2>
          <Button type='submit'>Add SubCategory</Button>
        </Form>
      </Wrapper>
    </>
  )
}
