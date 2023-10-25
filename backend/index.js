const connectToMongo=require('./db');
const express = require('express')
const auth = require('./routes/auth')
const notes = require('./routes/notes')
var cors = require('cors')
connectToMongo();


const app = express()
app.use(cors())
const port = 5000

app.use(express.json())
app.use("/api/auth", auth)
app.use("/api/notes", notes)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})