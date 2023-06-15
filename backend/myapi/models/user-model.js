
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://harwinderkaur:Blogdata123@cluster0.vajtj0s.mongodb.net/', {useNewUrlParser: true});
var conn =mongoose.Collection;

var userSchema =new mongoose.Schema({
  name: String,
  email: String,
  password: String,

});

var userModel = mongoose.model('user-model', userSchema);
module.exports=userModel;
