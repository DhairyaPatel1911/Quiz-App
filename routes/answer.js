const express = require('express');
const router = express.Router();
const Quiz = require('../models/User_Answer');

// Add Question
router.post('/add', async (req, res) => {
    const ans = new Quiz({
        userId: req.body.userId,
        quesId: req.body.quesId,
        user_ans: req.body.ans
    });
    try {
        const new_ans = await ans.save();
        res.json(new_ans);
    } catch (err) {
        res.json(err);
    }
});

// Update Question
router.put('/update', async (req, res) => {
    try {
            const updatedAns = await Quiz.updateOne({userId: req.body.userId, quesId: req.body.quesId}, { 
                $set: {user_ans: req.body.ans}
            });  
            res.json(updatedAns);
        }
    catch (err) {
        res.json(err);
    }
});

module.exports = router;