const express  = require("express")
const app = express()
const cors = require('cors')
var mongoose = require('mongoose')

require('dotenv').config()

const routes = require('./routes')


app.use(express.json())
app.use(cors())
app.use(routes)

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('conectado database')
}).catch((err)=>{
    console.log(err.message)
    
})


app.listen(3001, () =>{
    console.log('rodando')
});