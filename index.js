const express = require ("express")
const app = express()
require("dotenv").config()
const personSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      
    },
    age: {
      type: Number,
      required: true,
    },
  });
  const person = mongoose.model('person', personSchema);
module.exports = person;
