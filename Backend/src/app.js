const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors')




const app = express() //express call karte he server create hota hai

app.use(cors())

app.use(express.json())

//Create a test route because to check server chal raha hai ki nahi ya kishi karna bad ho gaya
app.get('/',(req,res)=> {
    res.send('hello world')
})

app.use('/ai',aiRoutes)

module.exports = app