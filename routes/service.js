import express from 'express';
import Test from '../app/Test.js';

const api = express.Router();
const test = new Test();

api.post('/test', async function (req, res) {
  try {
    const result = await test.cutString(req.body);
    console.log(result.data);
    return res.status(result.code).send(result.data);
  } catch (err) {
    console.log(err)
    return res.send("Unexpexted server error");
  }
});


export default api;
