import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

const models = require('../models');
const config = require('../config/config');

const passwordToHash = (password: string): string => {
  const genSalt: any = bcrypt.genSaltSync(10);
  const hashPassword: any = bcrypt.hash(password, genSalt);
  return hashPassword;
};
type JWT_USER = {
  iss: string;
  username: string;
};

const userCheck = async (req, res, next) => {
  const authHeader = req.cookies[`Authorization`];
  console.log(authHeader);
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '');
    const { username } = jwt.verify(token, config.jwt_secretKey) as JWT_USER;
    console.log(username);
    const findUser = await models.User.findOne({
      where: { username }
    });
    req.findUserId = findUser.id;
    next();
  }
};

const join = async (req, res, next) => {
  try {
    // const { id, username, password, name, phone } = req.body;
    const { password } = req.body;
    const hashPassword = await passwordToHash(password);
    console.log(hashPassword);
    const createUser = await models.User.create({
      ...req.body,
      password: hashPassword
    });
    res.status(200).json(createUser);
  } catch (e) {
    next(e);
  }
};
const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const findUser = await models.User.findOne({
      where: { username }
    });
    if (!findUser) res.status(200).json({ result: 'not found username ' });
    if (bcrypt.compareSync(req.body.password, findUser.password)) {
      const payload = {
        iss: 'myDomainName',
        username
      };
      const options: any = {
        algorithm: 'HS256',
        expiresIn: 60 * 60 * 24 * 30
      };
      jwt.sign(payload, config.jwt_secretKey, options, (err, token) => {
        if (err) return;
        res.cookie('Authorization', `Bearer ${token}`);
        res.status(200).json({
          result: 'login success'
        });
      });
    } else {
      //비밀번호 틀렸을때 처리
      console.log('wrong password');
      res.status(200).json({ result: 'wrong password' });
    }
  } catch (e) {
    next(e);
  }
};
const duplicateCheck = async (req, res, next) => {
  try {
    const { username } = req.body;
    const duplicateUser = await models.User.findOne({ where: { username } });
    if (!duplicateUser) res.status(200).json({ result: 'can use username' });
    else res.status(200).json({ result: `can't use username` });
  } catch (e) {
    next(e);
  }
};

export = {
  userCheck,
  join,
  login,
  duplicateCheck
};
