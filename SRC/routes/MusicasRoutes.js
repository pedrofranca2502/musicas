const express=require('express');
const route = express.Router();
const controller= require('../controller/musicascontroller.js');

route.get('/',controller.getAll);
route.get("/:id",controller.getByID)
route.post('/',controller.PostMuisicas)
route.delete('/:id',controller.deletemusicas)
route.put('/:id',controller.deletemusicas)
route.patch('/:id',controller.deletemusicas)


module.exports=route 