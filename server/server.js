const { ApolloServer } = require('apollo-server')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const jwt = require('jsonwebtoken');

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true
},(err,result)=>{ 
    if(err){
        console.log("Error in connecting database")
    }else{
        console.log("Mongobd connected successfully")
    }
})

const context=({ req }) => {
    const { authorization } = req.headers
    // console.log('authorization',authorization)
    if (authorization) {
      return jwt.verify(authorization, process.env.jwtSecretKeyApp, async (error, result) => {
        if (error) {
          return false
        }
        return { _id: result._id }
      })
    }
  }

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})