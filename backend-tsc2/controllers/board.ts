const models = require('../models');

type boardWritePayload = {
  title: string;
  content: string;
  imgUrl: string;
};
const boardWrite = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    // console.log(`title: ${title}`);
    const payload: boardWritePayload = {
      title,
      content,
      imgUrl: req.body.imgUrl ? req.body.imgUrl : null
    };

    const createBoard = await models.Board.create(payload);
    res.status(200).json(createBoard);
  } catch (e) {
    next(e);
  }
};

const boardReadAll = async (req, res, next) => {
  console.log('boardReadAll');
  const getBoards = await models.Board.findAll();
  console.log(getBoards);
  res.status(200).json(getBoards);
};
const boardReadOne = async (req, res, next) => {
  console.log('boardReadOne');
  console.log(req.findUserId);
  console.log(req.params.id);
  const { id } = req.params;
  const getBoards = await models.Board.findOne({ where: { id } });
  console.log(getBoards);
  res.status(200).json(getBoards);
};

const boardDelete = async (req, res, next) => {
  console.log('boardDelete');
  const { id } = req.params;
  try {
    const getBoards = await models.Board.destroy({
      where: { id }
    });
    res.status(200).json({ result: 'success' });
  } catch (err) {
    next(err);
  }
};

const boardChange = async (req, res, next) => {
  // res.send('boardChange');
  console.log('boardChange');
  const { id } = req.params;
  try {
    const { title, content } = req.body;
    const getBoards = await models.Board.update(
      {
        title,
        content
      },
      {
        where: {
          id
        }
      }
    );
    res.status(200).json({ result: 'success' });
  } catch (err) {
    next(err);
  }
};

export = {
  boardWrite,
  boardReadAll,
  boardReadOne,
  boardDelete,
  boardChange
};
