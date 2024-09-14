const fs = require('fs')
const model = require('../model/product')
// const data = JSON.parse(fs.readFileSync("data.json","utf-8"))
const Product = model.Product
const products = {}
const morgan = require('morgan')


exports.getProduct = async (req, res) => {
    const id = req.params.id
    const p = await Product.findById(id)
    res.json(p)
}
exports.getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}
exports.createProduct = (req, res) => {
    const product = new Product(req.body)
    product.save().then(doc => { console.log({ doc });}).catch((err) => console.log({ err }))
    res.json(req.body)
}
exports.replaceProduct = async (req, res) => {
    const id = req.params.id;
    const doc = await Product.findOneAndReplace({_id:id},req.body)
    res.json(201).json(doc)
}
exports.updateProduct = async(req, res) => {
    const id = req.params.id;
    const productsIndex = await Product.findByIdAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(productsIndex)
};
exports.removeProduct =async (req, res) => {
    const id = req.params.id;
    const productsIndex = await Product.findByIdAndDelete({_id:id})
    res.status(201).json(productsIndex)
}


