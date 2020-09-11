const { Schema } = require('mongoose');

const Question = new Schema({
  questionMessage: String,
  shortQuestionMessage: String,
  answerMessage: String,
  options: [{ id: Number, text: String, score: Number }],
  questionId: String,
  selected: Boolean
});

module.exports = Question;
