const express=require('express');
const router=express.Router()
const registerUser=require("./UserController")

router.route('/register').post(registerUser)
router.route('/product').delete(registerUser)
// .get((req,res)=>{
//     res.send('wow')
// })     can use 2methods in 1 api

module.exports=router;