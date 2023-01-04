var mongoose = require('mongoose');
var Schema = mongoose.Schema
var Product = mongoose.Schema({
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    subcategoryId: {
        type: Schema.Types.ObjectId,
        ref: 'subcategories'
    },
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: String,
        trim: true
    },
    discount: {
        type: String,
        trim: true
    },
    amount: {
        type: String,
        trim: true
    },
    image:{
        type: String,
        trim: true
    },
    status: {                       // 1=Verified Account ,2=Blocked By Admin 
        type: Number,
        trim: true,
        default: 1
    }
    
}, {
    timestamps: true
})
module.exports = mongoose.model('products', Product);