const express = require("express")
const route = express.Router()

route.get("/",function(req,res){
    res.status(200).send({
        title:"backend -senac",
        version:"1.0.0"
    })
})

module.exports=route