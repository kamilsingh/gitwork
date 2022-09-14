const mongoose = require('mongoose')
const mongoURI="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

mongoose.connect(mongoURI,{useNewUrlParser: true },{useUnifiedTopology:true});

const db= mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
console.log("mongo  connected");
  });