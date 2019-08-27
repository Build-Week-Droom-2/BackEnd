//This file will configure API server
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');



// const authenticate = require('../auth/auth-middleware');
const authRouter = require('../auth/auth-router');


const server = express();


//middleware
server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/droom', authRouter);


        //testing API
server.get('/', (req, res) => {
    res.status(200).json({ message: 'sucess! API is running 😎👍'})
});


module.exports = server;