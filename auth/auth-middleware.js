const jwt = require('jsonwebtoken');

const secrets = require('../secrets/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
    if (token){
      jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
        if(error) {
          res.status(401).json({message: 'access not granted'});
        } else {
          req.user = {email: decodedToken.email};
          next();
        }
      });
    } else {
      res.status(401).json({ error: 'Accesss not granted. Please login to continue' });
    }
  };
  