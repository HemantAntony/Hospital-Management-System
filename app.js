const express = require('express')
const app = express()
const cors = require('cors')
const core = require('./middlewares/core')

const {initiateDB} = require('./initiate_db')

app.use(cors())

app.use(express.json())

app.use('/', core)

initiateDB();
app.listen(5000, () => {
    console.log("Listening on 5000")
})