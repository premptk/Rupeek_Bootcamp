const mongoose = require('mongoose')
const db = "mongodb://0.0.0.0:27017/bootcamp"

// mongoose returns a promise
mongoose.connect(db, {useNewUrlParser: true})
.then(()=>console.log("DB Connected!"))
.catch((err)=>console.log(err));



// querying over mongo db 
// MongoClient.connect("mongodb://0.0.0.0:27017/bootcamp", function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("bootcamp");
//     /*Return only the documents with the address "Park Lane 38":*/
//     var query = { firstName : "Ajith" };
//     dbo.collection("users").findOne(query)
//     .then(response => console.log(response))
// }
  // MongoClient.open(function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("bootcamp");
  //   /*Return only the documents with the address "Park Lane 38":*/
  //   var query = {{interestName:"Reading"}, {_id:1}}
  //   setInterval(console.log(dbo.collection("interests").find(query)),1000);

  // });