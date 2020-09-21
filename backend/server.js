import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { port, host, db_conn } from './config';
import router from './routes';

const app = express();

mongoose
  .connect(db_conn, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('db connected!'))
  .catch((err) => console.log(`${err.message}`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Listening at http://${host}:${port}.`);
});
