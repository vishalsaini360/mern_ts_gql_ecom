import { gql } from '@apollo/client';
export const GET_ALL_CATEGORIES = gql`
query getCategories{
    getCategories{
      _id
      name
      image
      createdAt
      updatedAt
    }
  }
`
export const GET_ALL_SUBCATEGORIES = gql`
query getSubCategories{
    getSubCategories{
      _id
      name
      image
      createdAt
      updatedAt
      status
      category_info{
        _id
        name
        image
      }
    }
  }
`

export const GET_ALL_PRODUCTS = gql`
query getProducts{
  getProducts{
    _id
    categoryId
    subcategoryId
    name
    description
    price
    discount
    amount
    image
    createdAt
    updatedAt
    status
  }
}
`




// 
export const GET_MY_PROFILE = gql`
 query getUserById{
  user:user{
    _id
    firstName
    lastName
    email
    quotes{
      by
      name
    }
  }
}
`

export const GET_OTHER_USER_PROFILE = gql`
# Write your query or mutation here

query getOtherUserProfile($user_id:ID!){
    user:otherUserProfile(_id:$user_id){
        _id
        firstName
        lastName
        email
        quotes{
            by
            name
        }
    }
}
 
`