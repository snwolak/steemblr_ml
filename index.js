const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const trending = require('./trending')

app.use(bodyParser.json())

app.post('/rate', trending.app)

app.listen(3005, () => console.log('Server in running on port 3005!'))

