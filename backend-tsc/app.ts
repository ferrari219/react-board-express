import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.urlEncoded({ extended: true }));

app.listen(4000, () => {
  console.log('backend: 4000port');
});
