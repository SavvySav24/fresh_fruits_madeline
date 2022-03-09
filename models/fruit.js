//Import Dependencies
const mongoose = require("./connection");

//Define Model - pull schema and model from mongoose
const { Schema, model } = mongoose;

//Make fruits schema
const fruitSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
  })

  // make fruit model
const Fruit = model("Fruit", fruitSchema);


//Export Model
module.exports = Fruit;