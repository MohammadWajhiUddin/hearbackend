const express = require('express')
const app = express()
const { MongoClient } = require('mongodb');

const port = 3000;
const host = '0.0.0.0';





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





//routes
app.get('/s', (req, res) => {
    res.json("Welcome to heart care backend, deployment successfull");
  });

app.use("/HeartAttackDB/Users",UsersRouter);


app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
  });
