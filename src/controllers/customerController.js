var Customer = require('../models/customerModel');

exports.addCust = function(req, res) {
    // res.send('Calling addCust function');
    if(!req.body) {
        return res.status(400).send('Req body missing');
    } 
    var model = new Customer(req.body);
    model.save()
        .then((doc) => {
            if(!doc || doc.length === 0) {
                return res.status(500).send('Server error.');
            }
            res.status(201).send(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

exports.showCust = function(req, res) {
    // res.send('Calling showCust function');
    if(!req.query.email) {
        return res.status(400).send('Missing URL parameter.');
    }
    Customer.findOne({
        email: req.query.email
    })
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

exports.changeCust = function(req, res) {
    // res.send('Calling changeCust function');
    if(!req.query.email) {
        return res.status(400).send('Missing URL parameter.');
    }
    Customer.findOneAndUpdate({
        email: req.query.email
    }, req.body, {new: true})
    .then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.status(500).json(err);
    });

}

exports.deleteCust = function(req, res) {
    // res.send('Calling deleteCust function');
    if(!req.query.email) {
        return res.status(400).send('Missing URL parameter.');
    }
    Customer.findOneAndRemove({
        email: req.query.email
    })
    .then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
}



