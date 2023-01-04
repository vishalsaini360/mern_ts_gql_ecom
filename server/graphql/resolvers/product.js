const Admin = require('../../models/Admin')
const Product = require('../../models/Product')

module.exports = {
  Query :{
    async getProducts(_,__,{_id}){
      console.log('_id',_id)
        try{
            if (!_id) throw new Error("You must be logged in")
            const product = await Product.find({}).sort({createdAt:-1})
            return product
        } catch (err){
            throw new Error(err)
        }
    }
},
  Mutation: {
    createProduct: async (_, { CreateProductInput }, { _id }) => {
      try {
        if (!_id) throw new Error("You must be logged in")

        let validfateAdmin = await Admin.findById({ _id: _id })
        if (!validfateAdmin) throw new Error("Authentication Failed...")
        const amount = CreateProductInput.price-CreateProductInput.price*CreateProductInput.discount/100
        let productObj = new Product({
          categoryId:CreateProductInput.categoryId,
          subcategoryId:CreateProductInput.subcategoryId,
          name: CreateProductInput.name,
          description: CreateProductInput.description,
          price: CreateProductInput.price,
          discount: CreateProductInput.discount,
          amount: amount,
          image: CreateProductInput.image,
        })
        let saveData = await productObj.save();
        if(!saveData) throw new Error("Product not saved...")
        return saveData
      } catch (err) {
        throw new Error(err)
      }
    },
    async deleteProduct(_, { productId }, {_id},info ) {
        if (!_id) throw new Error("You must be logged in")
        let validfateAdmin = await Admin.findById({ _id: _id })
        if (!validfateAdmin) throw new Error("Authentication Failed...")

        try {
            const product = await Product.findById(productId);
            await product.delete();
            return 'Product deleted successfully';
        } catch (err) {
          throw new Error(err);
        }
      },
  }
}