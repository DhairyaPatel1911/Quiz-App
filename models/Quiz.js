const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema({
    quiz_name: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    questions: {
        type: [],
        required: true
    },
    takenBy: {
        type: []
    }
});

module.exports = mongoose.model('Quiz', QuizSchema);