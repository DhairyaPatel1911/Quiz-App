const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz_Question');

// Add Question
router.post('/add', async (req, res) => {
    const ques = new Quiz({
        question: req.body.question,
        topic: req.body.topic,
        option: req.body.option,
        correct_option: req.body.correct_option,
    });
    try {
        const new_ques = await ques.save();
        res.json(new_ques);
    } catch (err) {
        res.json(err);
    }
});

// Delete Question
router.delete('/remove', async (req, res) => {
    try {
        const removedQues = await Quiz.deleteOne({_id: req.body.Id});
        res.json(removedQues);
    } catch (err) {
        res.json(err);
    }
});

// Update Question
router.put('/update', async (req, res) => {
    try {
        if (req.body.question) {
            const updatedQues = await Quiz.updateOne({_id: req.body.Id}, { 
                $set: {question: req.body.question}
            });  
            res.json(updatedQues);
        }
        if(req.body.topic) {
            const updatedQues = await Quiz.updateOne({_id: req.body.Id}, { 
                $set: {topic: req.body.topic}
            });
            res.json(updatedQues);
        }
        if(req.body.option) {
            const updatedQues = await Quiz.updateOne({_id: req.body.Id}, { 
                $set: {option: req.body.option}
            });
            res.json(updatedQues);
        }
        if(req.body.correct_option) {
            const updatedQues = await Quiz.updateOne({_id: req.body.Id}, { 
                $set: {correct_option: req.body.correct_option}
            });
            res.json(updatedQues);
        }
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;