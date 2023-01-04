const Admin = require('../../models/Admin')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


module.exports = {
    Mutation: {
      adminLogin: async (_, { AdminLoginInput }) => {
          const admin = await Admin.findOne({ email: AdminLoginInput.email })
          if (!admin) {
              throw new Error("Admin Dosen't exists with this email")
          }
    
          var passVerify = await bcryptjs.compareSync(AdminLoginInput.password, admin.password);
          if (!passVerify) {
              throw new Error("Invalid credentials")
          }
    
          let token = await jwt.sign({ "_id": admin._id }, process.env.jwtSecretKeyApp, { expiresIn: '15d' });
          await Admin.findByIdAndUpdate({ _id: admin._id }, { $set: { jwt: token } }, { new: true })
          return {
            ...admin._doc,
            jwt:token
          }
        },
      }
}