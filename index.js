const express = require("express");     
const mongoose = require("mongoose");                                                          
require("dotenv").config();                                                                    
const UsuarioSchema = require("./modelos/usuario");
let colors = require('colors')                                                                 

// settings
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());



// routes-------------------------------------------
app.get("/", (req, res) => {
  res.send("Welcome to my API");
  console.log('hola mundo'.red);
  console.log('hola mundo'.blue);
  console.log('hola mundo'.green);
  console.log('hola mundo'.magenta);





});

// create usuario
app.post("/users", (req, res) => {
    const user = UsuarioSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // get all users
app.get("/users", (req, res) => {
  UsuarioSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  UsuarioSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  UsuarioSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, psw } = req.body;
  UsuarioSchema
    .updateOne({ _id: id }, { $set: { name, email, psw } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// mongodb connection
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));
 
  

  

// server listening
app.listen(port, () => console.log("Server listening to", port));