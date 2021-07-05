const express = require('express');

const userRouter  = express.Router();


/* 
 middleware
 and  router

*/

const userObject = {

    'id1': {
        name: 'himel',
        age: 17,
        country: 'Bangladesh'
    }
}


/* 

better way to write

*/

userRouter
.route('/')
.get( async (req,res) => {
    const bodyData = req.body;
    const user = await userObject[bodyData.id]
 
     res.status(200).send({
         status: "success",
         data: {
             user
         }
     })
 
 })
 .post((req,res) => {
    console.log(req.body)


    res.send({
        data: null
    })

})




/* 

avg way to write

*/


 
/*  
 userRouter.post('/post', (req,res) => {
     console.log(req.body)
 
 
     res.send({
         data: null
     })
 
 }) */


 exports.userRouter = userRouter
 
 
 