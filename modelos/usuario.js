const mongoose = require("mongoose")



const UsuarioSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
     email: {
      type: String,
      required: true
  
    },
    psw: {
        type: String,
        required: true
    }


  });
  
  module.exports = mongoose.model('User', UsuarioSchema);
