const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz_Question');

router.get('/:topic', async (req, res) => {
    try {
        const ques = await Quiz.find({topic: req.params.topic});
        res.json(ques);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;