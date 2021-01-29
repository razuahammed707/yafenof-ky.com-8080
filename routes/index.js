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
    
    if(isUserRegisted==null){
      res.send({status:0,
        code:"newUser",
        message:"מספר הטלפון שלך לא רשום במערכת שלנו"
      })
    }else{


    const allocatedDate = await User.find({date:req.body.date});
    console.log(allocatedDate);

    if(allocatedDate.length<5){
            let isUserExist = await User.findOne({cellPhone:req.body.cellPhone,date:req.body.date});
            console.log(isUserExist)
            if(!isUserExist){
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

    }else if(allocatedDate.lenght===5){
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
  //   console.log(user)
  //   if(user.length<5){


  //     let isUserExist = await User.findOne({cellPhone:req.body.cellPhone});
              
  //     if(!isUserExist){
  //         let userInfo= await User.create(req.body);
  //         res.send({
  //           status:true,
  //           body:userInfo,
  //           code:"success",
  //           message:"נרשמת בהצלחה"
  //         })
  //     }else{
  //       res.send({
  //         status:false,
  //         code:"exist",
  //         message:"את/ה כבר רשום"
  //       })
  //     }

  //   }else if(user.length===5){
  //     res.send({
  //       status:false,
  //       message:"התאריך שבחרת כבר מלא ולא ניתן להירשם אליו",
  //       code:"full"
  //     })
  //   }else{

  //  }
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
