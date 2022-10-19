
  var axios = require('axios');
const { json } = require('body-parser');
const e = require('express');



  var qs = require('qs');
  const Cart = require('../models/Cart');
  var cart = require('../models/Cart')
  var empty = null

 

const providerController = {
  

  //trazer dados dinamicamente que foram solicitados via post api 
  //trazer valores dos items e os itens 
  async get(req,res){
  

    const{_id} =  req.params
  
   
    try{
   
      const p = await cart.findById({_id}).populate('products')
      
   

    var pag, pagseguro;
    pagseguro = require('pagseguro');
    pag = new pagseguro({
        email : 'brunodim1@hotmail.com',
        token: '45CEA567FDE3483E8CBBB9189BEFF7DE',
        mode : 'sandbox'
    });

    //Configurando a moeda e a referência do pedido
    pag.currency('BRL');
    pag.reference('12345');
    
    
    //Adicionando itens
    
      p.products?.map((item,index)=>{
        

        pag.addItem({
          id: index + 1,
          description: item.productName,
          amount: item.productPrice.toFixed(2),
          quantity: 3,
          weight: 2342
        })
      
    

      
    })

   

    //Configurando as informações do comprador

    //Configurando a entrega do pedido

   
    //Configuranto URLs de retorno e de notificação (Opcional)
    //ver https://pagseguro.uol.com.br/v2/guia-de-integracao/finalizacao-do-pagamento.html#v2-item-redirecionando-o-comprador-para-uma-url-dinamica
   
    //dar um redirect com essa url 
    //Enviando o xml ao pagseguro
 
   pag.send(async function(err, res) {
        if (err) {
            console.log(err);
        }

        
    const regexexp = /<code>(.+?)<\/code>/
    const match = regexexp.exec(res)
    //console.log(match[1])
    
   
   
    empty =  `https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=${match[1]}`
    
     
     
        //url mmontada redirecionar com a url mobtadac
        
       
    console.log( empty +' empty inside the scope')
       
    });

    console.log(empty + ' empty out the scope')
    //esperar a url ser montada

      return res.status(200),res.send({redirect:  empty})
  
    }catch(err){
      console.log(err)
    }

  }

}



module.exports = providerController