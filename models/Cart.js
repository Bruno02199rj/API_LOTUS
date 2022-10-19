const mongoose = require('mongoose')
const { number, ref } = require('yup')

const Schema = new mongoose.Schema({

    
    products: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',

    }],
   

 CartCode:{
    type: String
   
 }
  
    //criar cart code aqui e total
    
})

module.exports = mongoose.model('Cart', Schema)