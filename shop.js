const express=require('express');
const router=express.Router();

router.get('/',function(req,res,next){
 res.send('<h1>hello from express</h1>');
});
module.exports=router;