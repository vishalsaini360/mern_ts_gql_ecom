const Users = require('../../models/Users')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const saltRounds=12;

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
    },
    Mutation: {
        async register(_,{ RegisterInput },context,info ) {
            console.log("ugutgguy",process.env.saltRounds)
          const checkEmail = await Users.findOne({ email: RegisterInput.email })
          if (checkEmail) {
              throw new Error("User Already exists with this email")
          }
          
          let hashPassword = await bcryptjs.hash(RegisterInput.password, saltRounds)
          const userObj = new Users({
              ...RegisterInput,
              password: hashPassword
          })
          const user = await userObj.save()
          let token = await jwt.sign({ "_id": user._id }, process.env.jwtSecretKeyApp, { expiresIn: '15d' });
          await Users.findByIdAndUpdate({ _id: user._id }, { $set: { jwt: token } }, { new: true })
          return {
            ...user._doc,
            jwt:token
          }
        },
        login: async (_, { LoginInput }) => {
          const user = await Users.findOne({ email: LoginInput.email })
          if (!user) {
              throw new Error("User Dosen't exists with this email")
          }
    
          var passVerify = await bcryptjs.compareSync(LoginInput.password, user.password);
          if (!passVerify) {
              throw new Error("Invalid credentials")
          }
    
          let token = await jwt.sign({ "_id": user._id }, process.env.jwtSecretKeyApp, { expiresIn: '15d' });
          await Users.findByIdAndUpdate({ _id: user._id }, { $set: { jwt: token } }, { new: true })
          return {
            ...user._doc,
            jwt:token
          }
        },
        updateProfile: async (_, { ProfileInput },{_id}) => {
          if (!_id) throw new Error("You must be logged in")
          
          let result2 = await Users.findByIdAndUpdate({ _id: _id }, { $set: { firstName: ProfileInput.firstName,lastName:ProfileInput.lastName } }, { new: true })
          return result2
        },
      }
}