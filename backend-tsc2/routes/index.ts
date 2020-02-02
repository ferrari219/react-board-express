import { Router } from 'express';
import * as board from './board';
import * as auth from './auth';
import * as file from './file';

const route = Router();

route.use('/board', board);
route.use('/file', file);
route.use('/auth', auth);

export = route;
