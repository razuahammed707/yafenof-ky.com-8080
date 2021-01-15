var express = require('express');
var router = express.Router();
const User = require("../model/user")
const RegisteredUser= require("../model/registedUser");
const NewUser = require("../model/newuser");
const allDate = require("../model/date")

/* GET home page. */
router.post('/all', async function(req, res, next) {
    try{
      const user = await User.aggregate([{
        $group:{
          "_id":"$date",
          data:{
            $push:{
              "userName":"$userName",
            }
          }
        }
      }]);

      const allDates = await allDate.find({})
    

      res.send({
        status:true,
        body:user,
        date:allDates
      })

    }catch(err){
      console.log(err)
      res.send({
        status:false,
        code:"failed"
      })
    }
});

router.post('/', async function(req, res, next) {
  try{

    const isUserRegisted = await RegisteredUser.findOne({cellPhone:req.body.cellPhone});
    console.log(isUserRegisted)
    
    if(isUserRegisted==null){
      res.send({status:0,
        code:"newUser",
        message:"מספר הטלפון שלך לא רשום במערכת שלנו"
      })
    }else{


    const user = await User.find({date:req.body.date});
    console.log(user);

    if(user.length<2 || user.length===0){

      let isUser =user.find(item=>{
        return item.cellPhone===req.body.cellPhone
      })

      console.log(isUser)
      

      let isUserExist = await User.find({cellPhone:req.body.cellPhone});
      
      if(isUserExist.length===0){
          let userInfo= await User.create(req.body);
          res.send({
            status:true,
            body:userInfo,
            code:"success",
            message:"נרשמת בהצלחה"
          })
      }else{
        res.send({
          status:false,
          code:"exist",
          message:"את/ה כבר רשום"
        })
      }

    }else if(user.length===2){
      res.send({
        status:false,
        message:"התאריך שבחרת כבר מלא ולא ניתן להירשם אליו",
        code:"full"
      })
    }else{
      res.send({
        status:false,
        code:"failed",
        message:"התאריך הזה נתפס כבר. צריך לבחור תאריך אחר",

      })
   }
  }
  }catch(err){
    console.log(err)
    res.send({
      status:400,
      err:err
    })
  }
});


router.post("/newUser",async(req,res)=>{
  let user=await NewUser.create(req.body);
  let registerUser=await RegisteredUser.create({cellPhone:req.body.cellPhone})

  res.send(user)
})

module.exports = router;
