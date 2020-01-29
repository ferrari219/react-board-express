const models = require('../models');

const boardWrite = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    console.log(title, content);
    const createBoard = await models.Board.create({
      title,
      content
    });
    res.status(200).json(createBoard); //등록이 되면 postman에 입력한 정보가 뜰것
  } catch (e) {
    next(e);
  }
};
const boardRead = async (req, res, next) => {
  try {
    // res.status(200).send('boardRead');
    const getBoards = await models.Board.findAll();
    res.status(200).json(getBoards);
  } catch (e) {
    next(e);
  }
};
const boardReadOne = async (req, res, next) => {
  try {
    // res.status(200).send('boardRead');
    const { id } = req.params;
    console.log(id);
    const getBoards = await models.Board.findOne({ where: { id } });
    res.status(200).json(getBoards);
  } catch (e) {
    next(e);
  }
};
const boardDelete = async (req, res, next) => {
  // res.status(200).send('boardDelete');
  try {
    console.log('boardDelete');
    //몇번째 값인지를 알아서 지워야 하니까 id 값이 필요
    const { id } = req.params;
    console.log(id);
    const DeleteBoard = await models.Board.destroy({
      where: { id }
    });
    //잘 찾아서 지워졌다면 성공 메시지 노출
    res.status(200).json({ result: 'success' });
  } catch (e) {
    next(e);
  }
};
const boardChange = async (req, res, next) => {
  // res.status(200).send('boardChange');
  try {
    //마찬가지로 몇번째 값인지 알아야 한다.
    const { id } = req.params;
    //내용을 바꾸려면 이전 내용을 불러와서 새 내용으로 바꿔야한다.
    const { title, content } = req.body;
    const ChangeBoard = await models.Board.update(
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
    res.status(200).json({ title, content });
  } catch (e) {
    next(e);
  }
};

//내보내야 다른 파일에서 사용가능
export = {
  boardWrite,
  boardRead,
  boardReadOne,
  boardDelete,
  boardChange
};
