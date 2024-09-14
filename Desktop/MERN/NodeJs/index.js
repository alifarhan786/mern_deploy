require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
const server = express()
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path')

const productController = require('./Controller/productController')

//db connection
main().catch(err=>console.log(err))
async function main() {
//    await mongoose.connect('mongodb://127.0.0.1:27017/ecom')
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Database  Connected")
    
}


//body parser = it parses the content in body fter writing it
server.use(cors())
server.use(express.static(path.resolve(__dirname,'dist')))
server.use(express.json())
server.use(morgan('combined'))
server.use('/add',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'dist','index.html'))
})
// const auth = (req,res,next)=>{
//     console.log(req.query)
//     if(req.body.password==='123'){
//             next()
//     }
//     else{
//         res.sendStatus(401)
//     }
// }

// API - Endpoint - Route 

// Create Post products


server.get('/products',productController.getAllProducts)
server.get('/products/:id',productController.getProduct)
server.post('/products',productController.createProduct)
server.put('/products/:id',productController.replaceProduct)
server.patch('/products/:id',productController.updateProduct)
server.delete('/products/:id',productController.removeProduct)


server.listen(8080,()=>{
    console.log("Server is running")
    
})

