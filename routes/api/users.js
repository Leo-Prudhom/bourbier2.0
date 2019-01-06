const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const key = require('../../config/keys').JWT_KEY;


const User = require('../../models/User');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.get('/', (req, res) => {
    User.find().then(users => res.json(users));
});

router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

router.post('/signup', (req, res) => {
    //check if this email is already setup
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    msg : "Mail already exists"
                })
            } else {
                 //hash pwd
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error : err
                        });
                    } else {
                        const newUser = new User({
                            email : req.body.email,
                            password : hash
                    
                    });            
                    newUser.save().then(user => res.status(201).json(user)).catch(err => res.status(404).json(err.message));
                    }
                });
            }
        })
        .catch();

});

router.post('/login', (req, res) => {
    User.find({ email: req.body.email})
        .exec()
        .then(user => {
            if(user.length < 1){
                return res.status(401).json({
                    msg: 'Auth failed'
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if(err) {
                    return res.status(401).json({
                        msg: 'Auth failed'
                    });
                }
                if (result){
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id
                        },
                        key,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        msg: 'Auth successful',
                        token : token
                    });
                }
            })
        })
        .catch(err => res.status(404).json(err.message))
});


router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});

router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => user.remove().then(res.json({succes : true})))
    .catch(err => res.status(404).json(err.message))
    
});

module.exports = router;