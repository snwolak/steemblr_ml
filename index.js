const express = require('express')
const app = express()
const trending = require('./trending')
app.get('/rate', trending.app)

app.listen(3005, () => console.log('Server in running on port 3005!'))

