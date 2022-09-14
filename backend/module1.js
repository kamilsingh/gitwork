var mongoose = require('mongoose')
var Schema= mongoose.Schema;
  
  
  const FavlistSchema= new mongoose.Schema(
    {
       name:String,
       data:[{item:String,quant:String}]
   
   }
  );
  
  module.exports=mongoose.model('favourite',FavlistSchema);