const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Auth = require('./auth-model');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Auth.add(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        res.status(500).json(500)
    });
});


module.exports = router;