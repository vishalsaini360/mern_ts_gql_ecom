const Admin = require('../../models/Admin')
const Category = require('../../models/Category')

module.exports = {
  Query :{
    async getCategories(_,__,{_id}){
      console.log('_id',_id)
        try{
            if (!_id) throw new Error("You must be logged in")
            const category = await Category.find({}).sort({createdAt:-1})
            return category
        } catch (err){
            throw new Error(err)
        }
    }
},
  Mutation: {
    createCategory: async (_, { CreateCategoryInput }, { _id }) => {
      try {
        if (!_id) throw new Error("You must be logged in")

        let validfateAdmin = await Admin.findById({ _id: _id })
        if (!validfateAdmin) throw new Error("Authentication Failed...")
        let categoryObj = new Category({
          name: CreateCategoryInput.name,
          image: CreateCategoryInput.image,
        })
        let saveData = await categoryObj.save();
        if(!saveData) throw new Error("Category not saved...")
        return saveData
      } catch (err) {
        throw new Error(err)
      }
    },
    async deleteCategory(_, { categoryId }, {_id},info ) {
        if (!_id) throw new Error("You must be logged in")
        let validfateAdmin = await Admin.findById({ _id: _id })
        if (!validfateAdmin) throw new Error("Authentication Failed...")

        try {
            const category = await Category.findById(categoryId);
            await category.delete();
            return 'Category deleted successfully';
        } catch (err) {
          throw new Error(err);
        }
      },
  }
}