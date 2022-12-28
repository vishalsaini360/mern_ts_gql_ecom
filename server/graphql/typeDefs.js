const {gql} = require('apollo-server')

module.exports=gql`
    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        jwt: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        getUsers: [User]
    }
`;