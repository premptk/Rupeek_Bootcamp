const mongoose = require('mongoose')
//const db=process.env.MONGO_URI;

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://0.0.0.0:27017/bootcamp", {useNewUrlParser: true})
.then(()=>console.log("DB Connected!"))
.catch((err)=>console.log(err));