const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();

app.use(cors({origin: true, credentials: true}));
const PORT = process.env.PORT || 3000
const URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/api-secret-chating'
mongoose.connect(URL, {useNewUrlParser: true}, () => {
    console.log(`Connect to mongodb server at ${URL}`)
})

const apiRoutes = require('./api_routes')

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`)
})