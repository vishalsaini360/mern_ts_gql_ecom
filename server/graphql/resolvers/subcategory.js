const Admin = require('../../models/Admin')
const Subcategory = require('../../models/Subcategory')

module.exports = {
  Query :{
    async getSubCategories(_,__,{_id}){
      try{
            if (!_id) throw new Error("You must be logged in")
            const subcategory = await Subcategory.find({}).sort({createdAt:-1})
            return subcategory
        } catch (err){
            throw new Error(err)
        }
    }
},
  Mutation: {
    createSubCategory: async (_, { CreateSubCategoryInput }, { _id }) => {
      try {
        if (!_id) throw new Error("You must be logged in")

        let validfateAdmin = await Admin.findById({ _id: _id })
        if (!validfateAdmin) throw new Error("Authentication Failed...")
        let subcategoryObj = new Subcategory({
          categoryId: CreateSubCategoryInput.categoryId,
          name: CreateSubCategoryInput.name,
          image: CreateSubCategoryInput.image,
        })
        let saveData = await subcategoryObj.save();
        if(!saveData) throw new Error("SubCategory not saved...")
        return saveData
      } catch (err) {
        throw new Error(err)
      }
    },
    async deleteSubCategory(_, { subCategoryId }, {_id},info ) {
        if (!_id) throw new Error("You must be logged in")
        let validfateAdmin = await Admin.findById({ _id: _id })
        if (!validfateAdmin) throw new Error("Authentication Failed...")

        try {
            const subcategory = await Subcategory.findById(subCategoryId);
            await subcategory.delete();
            return 'SubCategory deleted successfully';
        } catch (err) {
          throw new Error(err);
        }
      },
  }
}