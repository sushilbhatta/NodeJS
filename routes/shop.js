const express=require('express')
const router=express.Router()

router.get('/',(req,res,next)=>{
    // console.log('Second middleware')
    res.send('<h1>Helo from express</h1>')
})
module.exports=router