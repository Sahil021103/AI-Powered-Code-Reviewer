require('dotenv').config() // to access a key form .env
const app = require('./src/app')

app.listen(3000, () =>{// app.listen used to start the server
     console.log('Server is running on http://localhost:3000')
})