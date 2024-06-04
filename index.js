const express = require('express')
const {connectToDb, getDb} = require('./db')
const { ObjectId } = require('mongodb')
const app = express()





app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,Accept,Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
})



const UsersRouter = require('./api/Users/users.router')


 let db
connectToDb((err)=>{
    if(!err){
        app.listen(3000,()=>{
            console.log('app listening on port 3000')
        }) 
        db  = getDb()
    }
    })


//routes
app.get('/', (req, res) => {
    res.json("Welcome to heart care backend, deployment successfull");
  });

app.use("/HeartAttackDB/Users",UsersRouter);
