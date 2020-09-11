const QuestionModel = require('../../models/question');

module.exports = async (req, res) => {
  const active = await QuestionModel.findOne({ selected: true });
  res.send(active);
}