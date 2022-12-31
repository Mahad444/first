const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("connected successfully");
})
router.post('',(req,res)=>{
    res.create({})
})


module.exports=router;