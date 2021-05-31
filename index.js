require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const methodOverride = require('method-override')

//require cors
const cors = require('cors')

//parse requests of content-type - application/json
app.use(bodyParser.json())
//parse request of content type = application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

//middleware for update/delete routes
app.use(methodOverride('_method'))


//test route
app.get('/', (req, res)=> {
    res.json({message: "Welcome to the home page"})

})

//set up server
let server = app.listen(process.env.PORT || 3000, function() {
    console.log(`you're listening to the smooth sounds of port ${process.env.PORT}`)
})

module.exports = server