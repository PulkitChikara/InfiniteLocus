// connecting with database
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://sakshamgangrade227:abcd1234@cluster0.2hejqya.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to mongodb"));
db.once('open',function () { 
    console.log("connected to db mongodb")
 })
 module.exports=db;

