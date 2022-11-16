// External Import
const express = require('express')
const dotenv = require("dotenv")
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser')

// Internal  Import
// Internal Export
const { notFoundHandler, errorHander } = require("./middleware/common/errorHandler");


dotenv.config();


// database connection
mongoose.connect(process.env.Mongo_Connection_String, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
  .then(() => console.log("Database connection successfully"))
  .catch((err) => console.log(err));


// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// view engine setup
app.set("view engine", "ejs");


//app.use(express.static("public"))

// set static folder
app.use(express.static(path.join(__dirname, 'public')))


//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));


// routing setup



// 404 not found handler
app.use(notFoundHandler)

// common error handling
app.use(errorHander)


app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});

