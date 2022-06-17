const mongoose = require('mongoose');

const AnswerSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    quesId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz_Question'
    },
    user_ans: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User_Answer', AnswerSchema);