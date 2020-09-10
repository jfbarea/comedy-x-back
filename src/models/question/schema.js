const { Schema } = require('mongoose');

const Question = new Schema({
  questionMessage: String,
  answerMessage: String,
  options: [{ id: Number, text: String, score: Number }]
});

module.exports = Question;
