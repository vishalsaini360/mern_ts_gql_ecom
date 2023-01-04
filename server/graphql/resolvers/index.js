const usersResolvers = require('./users')
const adminResolvers = require('./admin')
const categoryResolvers = require('./category')
const subcategoryResolvers = require('./subcategory')
const productResolvers = require('./product')

module.exports = {
    Query:{
        ...usersResolvers.Query,
        ...categoryResolvers.Query,
        ...subcategoryResolvers.Query,
        ...productResolvers.Query,
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...adminResolvers.Mutation,
        ...categoryResolvers.Mutation,
        ...subcategoryResolvers.Mutation,
        ...productResolvers.Mutation,
      },
}