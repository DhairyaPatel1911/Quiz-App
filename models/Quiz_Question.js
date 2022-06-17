const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    option: {
        type: [],
        required: true
    },
    correct_option: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Quiz_Question', QuestionSchema);