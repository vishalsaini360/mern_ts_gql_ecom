const Users = require('../../models/Users')

module.exports = {
    Query :{
        async getUsers(){
            try{
                const users = await Users.find({}).sort({createdAt:-1})
                return users
            } catch (err){
                throw new Error(err)
            }
        }
    }
}