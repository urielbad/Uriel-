import productDAO from "../dao/products.dao.js";

const getAll = (req,res) =>{
    productDAO.getAll()
    .then(products=>res.render("../src/views/index",{products}))
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}
const getOne = (req,res) =>{
    const barcode= req.params.barcode
    productDAO.getOne(barcode)
    .then(result=>{
        !result?res.json({Status:`Barcode "${barcode}" Not Found :,(`}):res.json(result)
    })
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}
const insertOne = (req,res) =>{
    const product= req.body
    console.log(req.body)
    productDAO.insertOne(product)
    .then(result=>res.redirect("/api/products/"))
    .catch(err=>console.log("ño"))
}
const updateOne = (req,res) =>{
    productDAO.updateOne(req.params.barcode,req.body)
    .then(result=>{
        !result?res.json({Status:`Barcode "${req.params.barcode}" Not Found :,(`}):res.json({estatus:"Data update sucessfully"})
    })
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}
const deleteOne = (req,res) =>{
    productDAO.deleteOne(req.params.barcode)
    .then(result=>{
        !result?res.json({Status:`Barcode "${req.params.barcode}" Not Found :,(`}):res.json({estatus:"Data was delete sucesfully"})
    })
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}

export {getAll,getOne,insertOne, updateOne, deleteOne}