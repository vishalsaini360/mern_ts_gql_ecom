import { Form, Wrapper, FormWrapper, Input, Button, Label, H2, Select, Option, FormWrapper2,FormWrapperArea,TextArea,P } from './CreateProduct.style'

import { useFormik } from 'formik'
import { ProductSchemas } from '../../../Schema/Schema';
import CategoryList from '../CategoryList/CategoryList';
import SubCategoryList from '../SubCategoryList/SubCategoryList';

import { useMutation } from '@apollo/client'
import { CREATE_PRODUCT } from '../../../gqlOperations/mutations'

const initialValues = {
    categoryId: "",
    subcategoryId: "",
    name: "",
    description: "",
    price: "",
    discount: "",
    image: "",
}
export default function CreateProduct() {
    const [createProduct,{error,loading,data}] = useMutation(CREATE_PRODUCT,{
        refetchQueries:[
            `getProducts`
        ]
    })

    const { values, errors, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: ProductSchemas,
            onSubmit: (values, action) => {
                console.log("values : ", values);
                // alert("form Submited")
                createProduct({
                    variables:{
                        CreateProductInput:values
                    }
                })
                console.log('values', values)
                action.resetForm();
            }
        })
    return (
        <>
            <Wrapper>
                <Form onSubmit={handleSubmit}>
                    <H2>Products</H2>
                    <FormWrapper2>
                        <Label>Sub Category</Label>
                        <Select value={values.categoryId} name="categoryId" onChange={handleChange}>
                            <Option>---Select Sub Category---</Option>
                            <CategoryList/>
                        </Select>
                        <P>{errors.categoryId}</P>
                    </FormWrapper2>
                    <FormWrapper2>
                        <Label>Sub Category</Label>
                        <Select value={values.subcategoryId} name="subcategoryId" onChange={handleChange}>
                            <Option>---Select Sub Category---</Option>
                            <SubCategoryList/>
                        </Select>
                        <P>{errors.subcategoryId}</P>
                    </FormWrapper2>
                    <FormWrapper>
                        <Label>Products Name</Label>
                        <Input value={values.name} name="name" onChange={handleChange} type="text" />
                        <P>{errors.name}</P>
                    </FormWrapper>
                    <FormWrapper>
                        <Label>Products Price</Label>
                        <Input value={values.price} name="price" onChange={handleChange} type="text" />
                        <P>{errors.price}</P>
                    </FormWrapper>
                    <FormWrapper>
                        <Label>Products Discount</Label>
                        <Input value={values.discount} name="discount" onChange={handleChange} type="text" />
                        <P>{errors.discount}</P>
                    </FormWrapper>
                    <FormWrapper>
                        <Label>Products Image</Label>
                        <Input value={values.image} name="image" onChange={handleChange} type="text" />
                        <P>{errors.image}</P>
                    </FormWrapper>
                    <FormWrapperArea>
                    <Label>Products Image</Label>
                        <TextArea name="description" onChange={handleChange} defaultValue={values.name}></TextArea>
                        <P>{errors.description}</P>
                    </FormWrapperArea>
                    <Button type='submit'>Add Category</Button>
                </Form>
            </Wrapper>
        </>
    )
}
