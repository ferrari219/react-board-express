import { Router } from 'express';
import * as board from './board';

const route = Router();

route.use('/board', board);

export = route;
