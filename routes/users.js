const express = require('express');
const router = express.Router();

const {db} = require("../services/database");

/* GET users listing. */
router.get('/', async function (req, res) {
    try {
        let users = await db.collection('users').find().toArray();
        console.log(users);
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'An error occurred while fetching users'});
    }
});

router.post('/', function (req, res) {
    db.collection('users').insertOne(req.body)
        .then((user) => res.status(200).json({"id": user.insertedId}))
        .catch(err => res.status(500).json(err));
})

module.exports = router;