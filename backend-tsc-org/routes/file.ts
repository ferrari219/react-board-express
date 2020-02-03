import { Router } from 'express';
const file = require('../controllers/file');

const route = Router();

route.post('/upload', file.upload.array('img', 1), file.fileUpload);
// route.post('/upload', file.fileUpload);

export = route;
