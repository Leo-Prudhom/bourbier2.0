const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.get('/', (req, res) => {
    Item.find().then(items => res.json(items));
});

router.post('/', (req, res) => {
    const newItem = new Item({
        title : req.body.name,
        descr : req.body.descr,
        price : req.body.price,
        variants: req.body.variants
    });

    newItem.save().then(item => res.json(item)).catch(err => res.status(404).json(err.message));
});

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(res.json({succes : true})))
    .catch(err => res.status(404).json(err.message))
    
});

module.exports = router;