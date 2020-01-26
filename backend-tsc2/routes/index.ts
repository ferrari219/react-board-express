import { Router } from 'express';
import * as board from './board';
import * as auth from './auth';

const route = Router();

route.use('/board', board);
route.use('/auth', auth);

export = route;
