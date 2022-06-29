const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// Add Quiz
router.post('/add', async (req, res) => {
    const quiz = new Quiz({
        quiz_name: req.body.quiz_name,
        topic: req.body.topic,
        createdBy: req.body.createdBy,
        questions: req.body.questions,
    });
    try {
        const new_quiz = await quiz.save();
        res.json(new_quiz);
    } catch (err) {
        res.json(err);
    }
});


// Update Quiz
router.put('/update', async (req, res) => {
    try {
        if (req.body.quiz_name) {
            const updatedQuiz = await Quiz.updateOne({_id: req.body.Id}, {
                $set: {quiz_name: req.body.quiz_name}
            });
            res.json(updatedQuiz);
        }
        if (req.body.topic) {
            const updatedQuiz = await Quiz.updateOne({_id: req.body.Id}, {
                $set: {topic: req.body.topic}
            });
            res.json(updatedQuiz);
        }
        if (req.body.questions) {
            const updatedQuiz = await Quiz.updateOne({_id: req.body.Id}, {
                $set: {questions: req.body.questions}
            });
            res.json(updatedQuiz);
        }
        if (req.body.takenBy) {
            const updatedQuiz = await Quiz.updateOne({_id: req.body.Id}, {
                $push: {takenBy: req.body.takenBy}
            });
            res.json(updatedQuiz);
        }
    } catch (err) {
        res.json(err);
    }
});

// Read Quiz
router.get('/all', async (req, res) => {
    await Quiz.find((err, data) => {
        if (data) {
            res.json(data);
        } else {
            res.json(err);
        }
    }).clone()
});

// Delete Quiz
router.delete('/remove', async (req, res) => {
    try {
        const removedQuiz = await Quiz.deleteOne({_id: req.body.Id});
        res.json(removedQuiz);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;