const mongoose = require('mongoose')


const Schema = new mongoose.Schema({


    products: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',

    }],
    sizeOption: {
        type: Array
    },
    colorOption:{
        
        type: Array
    },
    transactionCode:{
        type: String
    },

    CartCode: {
        type: String

    }

    //criar cart code aqui e total

})

module.exports = mongoose.model('Cart', Schema)