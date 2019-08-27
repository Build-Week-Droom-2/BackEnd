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
        res.status(500).json({Error: 'user already exists'})
    });
});

router.post('/login', (req, res) => {
    let {email, password} = req.body;

    Auth.findBy( {email} )
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.email = user.email;
            req.session.loggedIn = true;
            res.status(200).json({
                message: `You are now signed in ${user.email}`,
            });
        } else {
            res.status(401).json({ message: 'Invalid Credentials'});
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

router.get('/logout', (req,res) => {
    req.session.destroy(() => {
        res.status(200).json({ message: 'You are now logged out.'})
    });
});

module.exports = router;