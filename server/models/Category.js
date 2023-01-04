var mongoose = require('mongoose');
var Category = mongoose.Schema({
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
module.exports = mongoose.model('categories', Category);