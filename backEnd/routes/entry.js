const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const moongose = require('../connection');
const User = require('../models/user');
const bcrypt = require('bcrypt');





// router.post('/register', (req, res) => {
//     let userData = req.body
//     let user = new User(userData)
//     user.save((error, registeredUser) => {
//         if(error){
//             console.log(error)
//         }
//         else{
//             let payload = {subject: registeredUser._id}
//             let token = jwt.sign(payload, 'secretKey')
//             res.status(200).send({token})
//         }
//     })
// })


// router.post('/register', (req, res) => {
//     let userData = req.body
//     let userdoc = new User(userData)
//     User.findOne({email:userData.email}, (error, user)=> {
//         if(error)
//           console.log("error")

//         else{  

//             if(user)
//               {res.status(401).send('Email not available');}
            
//             else  {
//                 userdoc.save((error, registeredUser) => {
//                     if(error){
//                         console.log(error)
//                     }
//                     else{
//                         let payload = {subject: registeredUser._id}
//                         let token = jwt.sign(payload, 'secretKey')
//                         res.status(200).json({
//                             status: true,
//                             message: "User registered",
//                             data: token,
//                         });
//                     }
//                 })


//             }
// }  
//     }
//     )
//     })



    router.post('/register', (req, res) => {
        bcrypt.hash(req.body.password , 10, (err, hash)=>{
            if(err) {return res.status(500).json({error:err});}
        else {    
        let userData = req.body
        userData.password = hash
        let userdoc = new User(userData)
        User.findOne({email:userData.email}, (error, user)=> {
            if(error)
              console.log("error")
    
            else{  
    
                if(user)
                  {res.status(401).send('Email not available');}
                
                else  {
                    userdoc.save((error, registeredUser) => {
                        if(error){
                            console.log(error)
                        }
                        else{
                            let payload = {subject: registeredUser._id}
                            let token = jwt.sign(payload, 'secretKey')
                            res.status(200).json({
                                status: true,
                                message: "User registered",
                                data: token,
                            });
                        }
                    })
    
    
                }
    }  
        }
        )
    }
    })})
    






router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({email: userData.email},(error, user) =>{
        if(error){
            console.log(error)
        }
        else{
            if(!user){
                res.status(401).send('Invalid email')
            }
            else {
             bcrypt.compare(userData.password, user.password, (err, result)=>{
            if( err){
                res.status(401).send('Invalid password')

            }
            if(result) {
                let payload = {subject: user._id}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token,data: {  user: user.toJSON() } })
                
                 }
                })
              }
        }
    })
})
// router.post('/login', (req, res) => {
//     let userData = req.body

//     User.findOne({email: userData.email},(error, user) =>{
//         if(error){
//             console.log(error)
//         }
//         else{
//             if(!user){
//                 res.status(401).send('Invalid email')
//             }
//             else
//             if( user.password !== userData.password){
//                 res.status(401).send('Invalid password')

//             }
//             else {
//                 let payload = {subject: user._id}
//                 let token = jwt.sign(payload, 'secretKey')
//                 res.status(200).send({token})
//             }
//         }
//     })
// })


module.exports = router;