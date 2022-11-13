const express = require('express')
const dotenv = require("dotenv")
const app = express()
const mongoose = require('mongoose')
const path = require('path')

dotenv.config()

const port = 3000


// database connection
mongoose.connect(process.env.Mongo_Connection_String, {
  useNewUrlParser: true,
  useUndefiedTopology: true,

})
  .then(() => console.log("Database connection successfully"));
  .catch ((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// view engine setup
app.set("veiw engine", 'ejs');


// set static folder
app.use(express.static(path.join(__dirname, 'public')))


//parse cookies

