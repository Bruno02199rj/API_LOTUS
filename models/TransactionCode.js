const mongoose = require('mongoose')


const Schema = new mongoose.Schema({


    eltransactionCode:{
        type: String
    }

   
    //criar cart code aqui e total

})

module.exports = mongoose.model('TransactionCode', Schema)