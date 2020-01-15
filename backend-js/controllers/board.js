const models = require('../models');

exports.boardWrite = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    console.log(`title: ${title}`);
    const createBoard = await models.Board.create({ title, content });
    res.status(200).json(createBoard);
  } catch (e) {
    next(e);
  }
};

exports.boardRead = async (req, res, next) => {
  console.log('it is boardRead');
  const getBoards = await models.Board.findAll();
  console.log(getBoards);
  res.status(200).json(getBoards);
};

exports.boardDelete = (req, res, next) => {
  res.send('boardDelete');
  console.log('boardDelete');
};

exports.boardChange = (req, res, next) => {
  res.send('boardChange');
  console.log('boardChange');
};
