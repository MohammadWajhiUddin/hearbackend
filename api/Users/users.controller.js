//const { ObjectId } = require("mongodb");
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://heartdiseasepredictor:4HIcrbdpZrtZCen3@heartdiseasepredictor.pyz2hy7.mongodb.net/?retryWrites=true&w=majority&appName=heartdiseasePredictor';
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 60000, // Increase timeout to 60 seconds
});

const db="a";

module.exports = {
  // getUsers:(req,res)=>{
  //     const body = req.body;

  //     let usersfromdb = []

  //     db.collection('users')
  // .find()
  //     .sort({age: 1})
  //     //.limit(1)
  //     .forEach( users => usersfromdb.push(users))
  //     .then(()=>{
  //         res.status(200).json(usersfromdb)
  //     })
  //     .catch(()=>{
  //         res.status(500).json({error:'could not fetch the documents'})
  //     })

  // },

  // getSortedUsers:(req,res)=>{
  //     const age = req.params.age;
  //     db.collection('users')
  //     .findOne({"age":  +req.params.age})
  //     .then(doc=>{
  //         res.status(200).json(doc)
  //     })
  //     .catch(()=>{
  //         res.status(500).json({error:'could not fetch the documents'})
  //     })

  // },

  // getSingleUserBasedOnId:(req,res)=>{
  //     if(ObjectId.isValid(req.params.id))
  //     {
  //         db.collection('users')
  //         .findOne({_id:new ObjectId(req.params.id)})
  //         .then(doc=>{
  //             res.status(200).json(doc)
  //         })
  //         .catch(()=>{
  //             res.status(500).json({error:'could not fetch the documents'})
  //         })
  //     }else{
  //         res.status(500).json({error:'not a valid user id'})
  // }

  // },

  // getSingleUserBasedOnDifferentParameter:(req,res)=>{
  //     const age = req.params.age;
  // db.collection('users')
  // .findOne({"age":  +req.params.age})
  // .then(doc=>{
  //     res.status(200).json(doc)
  // })
  // .catch(()=>{
  //     res.status(500).json({error:'could not fetch the documents'})
  // })

  // },



  registerUser: async(req, res) => {
    
      const users = req.body;
      try {
        await client.connect();
        const database = client.db('heartcaredb');
        const collection = database.collection('users');
        const result = await collection.insertOne(users)
        .then((result) => res.status(201).json(result))
        .catch((err) =>
          res.status(500).json({ error: "could not create new documents" })
        );   
       } catch (err) {
    } finally {
        await client.close();
    }

    
  

  
  },

  adduserhealthlogs: async(req, res) => {
    
    const usershealthlog = req.body;

    try {
      await client.connect();
      const database = client.db('heartcaredb');
      const collection = database.collection('Healthlog');
      const result = await collection.insertOne(usershealthlog)
      .then((result) => res.status(201).json(result))
      .catch((err) =>
        res.status(500).json({ error: "could not create new documents" })
      );   
     } catch (err) {
  } finally {
      await client.close();
  }



},

  loginUser: async (req, res) => {
    
    try {
    const { userEmail, userPassword } = req.body;
    await client.connect();
    const database = client.db('heartcaredb');
    const collection  = database.collection('users')
    const result = await collection.findOne({ userEmail: userEmail })
      .then((user) => {
        console.log(user)
        if (user) {
          if (user.userPassword === userPassword) {
            res.status(201).json({result:"success",data:user});
          } else {
            res.json("The password is incorrect");
          }
        } else {
          res.json("No record existed");
        }
      })
      .catch((err) =>
        res.status(500).json({ error: "could not create new documents" })
      );
    }
      catch (err) {
      } finally {
          await client.close();
      }
  },

  // addMultipleUsers:(req,res)=>{
  //     const users = req.body
  //     db.collection('users')
  //     .insertMany(users)
  //     .then(result =>res.status(201).json(result))
  //     .catch(err => res.status(500).json({error:'could not create new documents'}))
  // },

  // deleteSingleUser:(req,res)=>{
  //     if(ObjectId.isValid(req.params.userid))
  //     {
  //         db.collection('users')
  //         .deleteOne({_id:new ObjectId(req.params.userid)})
  //         .then(doc=>{
  //             res.status(200).json(doc)
  //         })
  //         .catch(()=>{
  //             res.status(500).json({error:'could not fetch the documents'})
  //         })
  //     }else{
  //         res.status(500).json({error:'not a valid user id'})
  // }
  // },

  // deleteMultipleUsersBasedOnCertailCriteria:(req,res)=>{
  //     db.collection('users')
  //     .deleteMany({age:{$gt :+req.params.userage}})
  //     .then(doc=>{
  //         res.status(200).json(doc)
  //     })
  //     .catch(()=>{
  //         res.status(500).json({error:'could not fetch the documents'})
  //     })
  // },

  // updateSingleUser:(req,res)=>{
  //     const updates = req.body
  //     if(ObjectId.isValid(req.params.userid))
  //     {
  //         db.collection('users')
  //         .updateOne({_id:new ObjectId(req.params.userid)},{$set:updates})
  //         .then(doc=>{
  //             res.status(200).json(doc)
  //         })
  //         .catch(()=>{
  //             res.status(500).json({error:'could not fetch the documents'})
  //         })
  //     }else{
  //         res.status(500).json({error:'not a valid user id'})
  //     }
  // }
};
