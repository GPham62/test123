const express = require('express')
const apiRouter = express.Router()

apiRouter.use('/users', require('./userRouter'));
apiRouter.use('/chat', require('./chatRouter'));
apiRouter.use('/auth', require('./authRouter'));
module.exports = apiRouter