var mongoose = require('mongoose');
var Schema = mongoose.Schema
var SubCategories = mongoose.Schema({
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    name: {
        type: String,
        trim: true
    },
    image: {
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
module.exports = mongoose.model('subcategories', SubCategories);