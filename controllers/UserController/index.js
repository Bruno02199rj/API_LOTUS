const User = require('../../models/User')

const UserController = {
    async createUser(req,res){
        
        const body = req.body

        try{

            const newUser = await User.create(body)
            return res.status(201).json(newUser)
        } catch(err){
            return res.status(400).json(err)
        }

    },

    async getUsers(req,res) {

        try{
            const users = await User.find()
            return res.status(200).json(users)
        } catch(err){
            res.status(400).json(err)
        }

    }
}



module.exports = UserController