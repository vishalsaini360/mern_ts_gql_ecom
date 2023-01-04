const {gql} = require('apollo-server')

module.exports=gql`
    #Type 
    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        jwt: String!
        createdAt: String!
        updatedAt: String!
    }

    type Admin {
        _id: ID!
        name: String!
        email: String!
        jwt: String!
        createdAt: String!
        updatedAt: String!
    }

    type Category {
        _id: ID!
        name: String!
        image: String!
        status: String!
        createdAt: String!
        updatedAt: String!
    }
    type SubCategory {
        _id: ID!
        categoryId: ID!
        name: String!
        image: String!
        status: String!
        createdAt: String!
        updatedAt: String!
    }
    type Product {
        _id: ID!
        categoryId: ID!
        subcategoryId: ID!
        name: String!
        description:String!
        price:String!
        discount:String!
        amount:String!
        image: String!
        status: String!
        createdAt: String!
        updatedAt: String!
    }

    # Mutation Input

    input RegisterInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }
    input LoginInput {
        password: String!
        email: String!
    }
    input ProfileInput {
        firstName: String!
        lastame: String!
    }

    input AdminLoginInput {
        password: String!
        email: String!
    }

    input CreateCategoryInput {
        name: String!
        image: String!
    }

    input CreateSubCategoryInput {
        categoryId: ID!
        name: String!
        image: String!
    }
    input CreateProductInput {
        categoryId: ID!
        subcategoryId: ID!
        name: String!
        description: String!
        price: String!
        discount: String!
        image: String!
    }


    # Query
    type Query {
        getUsers: [User]
        getCategories: [Category]
        getSubCategories: [SubCategory]
        getProducts: [Product]
    }

    # Mutation 
    type Mutation {
        register(RegisterInput: RegisterInput!): User
        login(LoginInput: LoginInput!): User
        updateProfile(ProfileInput: ProfileInput!): User
        adminLogin(AdminLoginInput: AdminLoginInput!): Admin
        createCategory(CreateCategoryInput: CreateCategoryInput!): Category
        deleteCategory(categoryId: ID!): String
        createSubCategory(CreateSubCategoryInput: CreateSubCategoryInput!): SubCategory
        deleteSubCategory(subCategoryId: ID!): String
        createProduct(CreateProductInput: CreateProductInput!): Product
        deleteProduct(productId: ID!): String
    }
`;