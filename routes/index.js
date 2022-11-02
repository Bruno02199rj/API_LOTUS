const path = require('path')
const express = require ('express')
const {Router} = require('express');

const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')

const { authenticate } = require('../middlewares');
const { getUsers } = require('../controllers/UserController');
const  CartsController  = require('../controllers/CartController');
const TransactionController = require('../PaymentController/TransactionsController');
const { default: Pagseg } = require('../PagseguroProvider/Pagseg');
const s = require('../PagseguroProvider/Pagseg');
const providerController = require('../PagseguroProvider/Pagseg');
const codeController = require('../PagseguroProvider/CodeController');



const routes = Router();







routes.post('/users',UserController.createUser)



routes.get('/users', UserController.getUsers)
  

routes.get('/users/:user_id', UserController.getUserById)

routes.post('/sessions', SessionController.createSession)

routes.post('/products/:user_id', authenticate,ProductController.createProduct)
routes.get('/:user_id/products',ProductController.getUsersProducts)
routes.patch('/products/:user_id/:product_id',authenticate,ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id',authenticate,ProductController.deleteProduct)

routes.get('/products',ProductController.getProducts)
routes.get('/products/:product_id',ProductController.getProductsById)

routes.post('/carts', CartsController.createCart)


routes.get('/carts/:_id', CartController.getCart)
routes.delete('/carts/:_id', CartController.delete)


routes.get('/transaction/:_id', providerController.get)





//routes.get('/transaction', codeController.getToken)







module.exports = routes 