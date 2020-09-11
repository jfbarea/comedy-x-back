const QuestionModel = require('../../models/question');

const MANDATORY_HEADER = 'cmdx-admin';

module.exports = async (req, res) => {
  if (req.headers[MANDATORY_HEADER]) {
    const { question } = req.body;
    const active = await QuestionModel.findOne({ selected: true });
    const next = await QuestionModel.findOne({ questionId: question, selected: false });

    if (next && active.questionId !== next.questionId) {
      active.selected = false;
      await active.save();
      next.selected = true;
      await next.save();

      res.send(next);
    }
  } else res.status(400).end();
}
