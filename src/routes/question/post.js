const QuestionModel = require('../../models/question');

module.exports = async (req, res) => {
  const { question, answer } = req.body;

  const active = await QuestionModel.findOne({ questionId: question, selected: true });
  if (active) {
    active.options = active.options.map((o) => { 
      return o.id === answer ? 
        {id: o.id, text: o.text, score: o.score + 1}
        : o;
    });
    await active.save(); 
    res.send(active);
  } else res.status(400).end();
}