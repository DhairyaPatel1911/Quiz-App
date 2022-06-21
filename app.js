const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Authentication = require('./routes/auth');
const Quiz_Question = require('./routes/quiz');
const Admin = require('./routes/admin');
const User_Answer = require('./routes/answer');

const username = encodeURIComponent("DhairyaPatel1911");
const password = encodeURIComponent("Astrophysics@1911");
var url = `mongodb+srv://${username}:${password}@cluster0.l2jjyym.mongodb.net/QuizApp?retryWrites=true&w=majority`;

app.use(express.json());
app.use('/auth', Authentication);
app.use('/quiz', Quiz_Question);
app.use('/admin', Admin);
app.use('/answer', User_Answer);

app.get('/', (req, res) => {
    res.sendFile('D:/Summer Internship/Quiz App/index.html');
});

mongoose.connect(url, () => console.log("Connected to Database!!!"));

app.listen(3000, () => console.log("Listening to post 3000..."));