const User = require('./model/user.js')
const express = require('express')
const app = express()
const port = 4000

 const mongoose = require('mongoose');
 const cors = require('cors'); //cross origin resource

 const Book = require('./model/book.js')
 //middleware
 app.use(express.json())
 app.use(cors())
 app.use(express.urlencoded({ extended: false}))

 const dbURL = "mongodb+srv://sauravmishra1218:Saurav1218@cluster0.wzgn3wr.mongodb.net/?retryWrites=true&w=majority"

 mongoose.connect(dbURL).then(()=>{
    console.log("database connected");
 })
//signIn 
 app.post('/login',(req,res)=>{
    User.findOne({email:req.body.email}).then((doc)=>{
        if(doc){
            if(doc.password === req.body.password){
                res.send({message:"login successful",status:200})
            }
            else{
                res.send({message:"Login Failed"})
            }
        }
        else{
            res.send({message:"User Not Found"})
        }
    })

 })
 //signup

 app.post('/signup',(req,res)=>{
   User.findOne({email:req.body.email}).then((doc)=>{
    if(doc){
        res.send({message:"user already exist"})
    }
    else{
        let data = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        data.save().then(()=>{
            res.send({message:"user registration successful",status:200})
            
        }).catch(err=>{
            res.send({message:"user registration failed"})
        }

        )
    }
   })

 })

 //add foods
 app.post('/add-book',(req,res)=>{
    const data = new Book({
        title: req.body.title,
        author: req.body.author,
        imageURL: req.body.imageURL
    })
    data.save().then(()=>{
        res.send({message:"book added successfully"})
    }).catch((err)=>{
            res.send({message:"Error while adding book"})
    })
 })

 //fetch all data
 app.get('/book',async(req,res)=>{
      try {
        const data = await Book.find()
        res.json(data)
      } catch (error) {
        console.log(error);
      }
 })
 
 app.listen(port,(()=>{
console.log("req port created");
 }))