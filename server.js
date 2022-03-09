/////////////////////////////////
// Import Our Dependencies
////////////////////////////////
require("dotenv").config(); // Load ENV variables into process.env
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const fruitController = require('./controllers/fruit');
const path = require("path"); // built in node module we use to resolve paths more on this when we use it



/////////////////////////
// App Object Setup
////////////////////////
const app = express()
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')

///////////////////////////
// Middleware
//////////////////////////
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically

///////////////////
// Routes
//////////////////
app.use('/fruits', fruitController)
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
  });



////////////////////
// Server Listener
/////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`))
