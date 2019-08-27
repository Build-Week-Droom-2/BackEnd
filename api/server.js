//This file will configure API server
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

// const authenticate = require('../auth/auth-middleware');
const authRouter = require('../auth/auth-router');

const knexConnection = require('../database/configDb');

const server = express();

const sessionConfig ={
    name: 'droom-cookies',
    secret: process.env.COOKIE_SECRET || "secured",
    cookie: {
        secure: process.env.COOKIE_SECURE || false,
        maxAge: 1000 * 60 * 60 * 48,
        httpOnly: true,
    },
    reserve: false,
    saveUnitialized: true,
    store: new KnexSessionStore ({
        knex: knexConnection,
        clearTable: true,
        clearInterval: 1000 * 60 *40,
    }),
};

//middleware
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use('/droom', authRouter);


        //testing API
server.get('/', (req, res) => {
    res.status(200).json({ message: 'sucess! API is running 😎👍'})
});

module.exports = server;