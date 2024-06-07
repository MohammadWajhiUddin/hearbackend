const {MongoClient }  = require('mongodb')

let dbConnection

const uri = "mongodb+srv://heartdiseasepredictor:4HIcrbdpZrtZCen3@heartdiseasepredictor.pyz2hy7.mongodb.net/?retryWrites=true&w=majority&appName=heartdiseasePredictor"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true ,    serverSelectionTimeoutMS: 60000});

module.exports ={
    connectToDb: (cb) => {

      
        client.connect('mongodb+srv://heartdiseasepredictor:4HIcrbdpZrtZCen3@heartdiseasepredictor.pyz2hy7.mongodb.net/?retryWrites=true&w=majority&appName=heartdiseasePredictor')
            .then((client)=>{
                    dbConnection  = client.db('heartcaredb');
                    return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)

            })
    },
    getDb: ()=> dbConnection
}
