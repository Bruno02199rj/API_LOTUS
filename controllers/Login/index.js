const User = require('../../models/User')

const SessionController = {

    async createSession(req, res){

        const { username } = req.body
        const { password } = req.body

        try{
            
            const user = await User.findOne({ username }, { password })
            res.status(200).json(user)

        } catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports = SessionController