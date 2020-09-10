const QuestionModel = require('../../models/question');

module.exports = async (req, res) => {
  const questions = await QuestionModel.find({});
  res.send(questions);
}