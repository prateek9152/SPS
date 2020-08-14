const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let weddingSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  name:{
    type: String
  },
  photo1:{
    type: String
  },
  photo2:{
    type: String
  },
  photo3:{
    type: String
  }
},
  {
    collation: 'weddings'
  })
  module.exports = mongoose.model('Wedding',weddingSchema)
