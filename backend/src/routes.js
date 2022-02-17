const express = require('express');
const jwt = require('jsonwebtoken');

const authMiddleware = require('./auth');
const users = require('./users.json');

const router = express.Router();

router.post('/authenticate', (req, res) => {
  const user = {
    id: 1,
    email: req.email,
    password: req.password
  };

  return res.json({
    user,
    token: jwt.sign(user, 'TOMATE'),
  });
});

/**
 * Private route
 */
router.use(authMiddleware);

router.get('/users', (req, res) => {
  return res.json(users.actress);
});

module.exports = router;
