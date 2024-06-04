const { connectToDb, getDb } = require("../../db");
const { ObjectId } = require("mongodb");
let db;

connectToDb((err) => {
  if (!err) {
    db = getDb();
  }
});




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
  

      // Create a new database and collection
    
      const collection = db.collection('final');
      const result = await collection.insertOne(users)
      .then((result) => res.status(201).json(result))
      .catch((err) =>
        res.status(500).json({ error: "could not create new documents" })
      );

  
  },

  loginUser: (req, res) => {
    const { userEmail, userPassword } = req.body;
    db.collection("users")
      .findOne({ userEmail: userEmail })
      .then((user) => {
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
