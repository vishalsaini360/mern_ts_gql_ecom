import { gql } from '@apollo/client';

export const LOGIN_ADMIN=gql`
mutation adminLogin($AdminLoginInput:AdminLoginInput!){
    admin:adminLogin(AdminLoginInput:$AdminLoginInput){
      _id
      name
      email
      jwt
      createdAt
      updatedAt
    }
  }
`

export const CREATE_CATEGORY=gql`
mutation createCategory($CreateCategoryInput:CreateCategoryInput!){
    category:createCategory(CreateCategoryInput:$CreateCategoryInput){
      _id
      name
      status
      image
      createdAt
      updatedAt
    }
  }
`

export const DELETE_CATEGORY=gql`
mutation deleteCategory($categoryId: ID!){
    deleteCategory(categoryId:$categoryId)
  }
`

export const CREATE_SUBCATEGORY=gql`
mutation createSubCategory($CreateSubCategoryInput:CreateSubCategoryInput!){
  createSubCategory(CreateSubCategoryInput:$CreateSubCategoryInput){
    _id
    categoryId
    name
    status
    image
    createdAt
    updatedAt
  }
}
`

export const DELETE_SUBCATEGORY=gql`
mutation deleteSubCategory($subCategoryId: ID!){
    deleteSubCategory(subCategoryId:$subCategoryId)
  }
`
export const CREATE_PRODUCT=gql`
mutation createProduct($CreateProductInput:CreateProductInput!){
  createProduct(CreateProductInput:$CreateProductInput){
    _id
    categoryId
    subcategoryId
    name
    description
    price
    discount
    amount
    status
    image
    createdAt
    updatedAt
  }
}
`

export const DELETE_PRODUCT=gql`
mutation deleteProduct($productId: ID!){
  deleteProduct(productId:$productId)
}
`