const models = require('../models');

const boardWrite = async (req, res, next) => {
  res.send('boardWrite');
  console.log('boardWrite');
  try {
    const { title, content } = req.body;
    // console.log(`title: ${title}`);
    const createBoard = await models.Board.create({ title, content });
    res.status(200).json(createBoard);
  } catch (e) {
    next(e);
  }
};

const boardRead = async (req, res, next) => {
  // res.send('boardRead');
  console.log('boardRead');
  const getBoards = await models.Board.findAll();

  console.log(getBoards);
  res.status(200).json(getBoards);
};

const boardDelete = (req, res, next) => {
  res.send('boardDelete');
  console.log('boardDelete');
};

const boardChange = (req, res, next) => {
  res.send('boardChange');
  console.log('boardChange');
};

export = {
  boardWrite,
  boardRead,
  boardDelete,
  boardChange
};
