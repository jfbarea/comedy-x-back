const QuestionModel = require('../../models/question');

const MANDATORY_HEADER = 'cmdx-admin';

  module.exports = async (req, res) => {
    if (req.headers[MANDATORY_HEADER]) {
      const questions = await QuestionModel.find({});
      await Promise.all(questions.map(async (q) => {
        q.selected = q.questionId === 'q1';
        q.options = q.options.map(a => ({ id: a.id, text: a.text, score: 0 }));
        await q.save();
      }));

      res.send();
    } else res.status(400).end();
}
