var express = require('express');
var router = express.Router();
const User = require("../model/user")

/* GET home page. */
router.post('/all', async function(req, res, next) {
    try{
      const user = await User.find({})
      res.send({
        status:true,
        body:user
      })

    }catch(err){
      res.send({
        status:false,
        code:"failed"
      })
    }
});

router.post('/', async function(req, res, next) {
  try{
    const user = await User.find({date:req.body.date});
    console.log(user.length)

    if(user.length<2 || user.length===0){

      let isUserExist = await User.find({date:req.body.date,cellPhone:req.body.cellPhone});
      
      if(isUserExist.length===0){
          let userInfo= await User.create(req.body);
          res.send({
            status:true,
            body:userInfo,
            code:"success",
            message:"Successfully Created"
          })
      }else{
        res.send({
          status:false,
          code:"exist",
          message:"Already existes"
        })
      }

    }else if(user.lenght===2){
      res.send({
        status:false,
        message:"Already full",
        code:"full"
      })
    }else{
      res.send({
        status:false,
        code:"failed",
        message:"Already full",

      })
    }
  }catch(err){
    console.log(err)
    res.send({
      status:400,
      err:err
    })
  }
});

module.exports = router;
