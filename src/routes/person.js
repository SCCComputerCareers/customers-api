var router = require('express').Router();

router.get('/person', (req, res) => {
    res.send(`You have requested a person with name: ${req.query.name}`)
});

router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person using params: ${req.params.name}`);
});

module.exports = router;