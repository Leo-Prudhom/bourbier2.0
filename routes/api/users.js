const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.get('/', (req, res) => {
    User.find().then(users => res.json(users));
});


router.post('/', (req, res) => {
    const newUser = new User({
        identity : {
            firstName : req.body.identity.firstName,
            lastName : req.body.identity.lastName
        },
        email : req.body.email,
        adress : req.body.adress
    });

    newUser.save().then(user => res.json(user)).catch(err => res.status(404).json(err.message));
});

router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => user.remove().then(res.json({succes : true})))
    .catch(err => res.status(404).json(err.message))
    
});

module.exports = router;