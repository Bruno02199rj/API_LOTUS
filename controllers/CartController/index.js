const Cart = require('../../models/Cart')
const { v4: uuidv4 } = require('uuid');
const { db } = require('../../models/Cart');


const CartController = {

    

    async createCart(req, res) {

        const bodyData = req.body
        const { user_id, cartCode } = req.params
        

        try {

            const createdCart = await Cart.create({...bodyData, username: user_id}, )
            
            await createdCart.populate('products')
           
         
             
            createdCart.CartCode = await uuidv4()
         
            //somar os produtos
            return res.status(200).json(createdCart)

        } catch(err) {

            res.status(400).json(err + '  here create')
        }

    },

    
   
    async delete(req, res) {
       
        const{_id} = req.params


        try {
          
          
            const cart = await Cart.findByIdAndDelete({_id}).populate('products')
            
            


            return res.status(200).json(cart)
        } catch(err) {

            res.status(400).json(err + 'here')
        }

    },
    async getCart(req, res) {
       
        const{_id} = req.params


        try {
          
          
            const cart = await Cart.findById({_id}).populate('products')
            
            


            return res.status(200).json(cart)
        } catch(err) {

            res.status(400).json(err + 'here')
        }

    }


}

module.exports = CartController