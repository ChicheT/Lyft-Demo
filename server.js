import express from 'express';
import bodyParser from 'body-parser';
import service from './routes/service.js';


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', service);

app.listen(port, function () {
  console.log('Server is running at port: ' + port);
});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});

export default app;
