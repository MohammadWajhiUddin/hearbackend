const {MongoClient }  = require('mongodb')

let dbConnection


module.exports ={
    connectToDb: (cb) => {

      
        MongoClient.connect('mongodb+srv://heartdiseasepredictor:4HIcrbdpZrtZCen3@heartdiseasepredictor.pyz2hy7.mongodb.net/?retryWrites=true&w=majority&appName=heartdiseasePredictor')
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
