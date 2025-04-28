const express = require('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const UserModule = require('./Module/Product')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Inventory')

app.delete("/deleteProduct/:id", (req , res) =>{
    const id = req.params.id;
    UserModule.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/updateProduct/:id", (req , res) =>{
    const id = req.params.id;
    UserModule.findByIdAndUpdate({_id:id},
    {
        productName: req.body.productName,
        quantity: req.body.quantity,
        price: req.body.price
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/getproduct/:id", (req , res) =>{
    const id = req.params.id;
    UserModule.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/Product", (req , res) =>{
    UserModule.find(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/Create", (req , res) =>{
    UserModule.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.listen(3001,() =>{
    console.log("Server is Running")
})