const express = require('express');
const bodyParser = require('body-parser');
const app = express.Router();
module.exports = app;

const db = require(`./db-datastore`);

app.get('/', function(req, res) {
  res.sendStatus(204);
});

app.get('/:id(\\w+)', async (req, res) => {
  try {
    res.send(await db.get(req.params.id));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});


app.post('/:id(\\w+)', bodyParser.text(), async (req, res) => {
  try {
    await db.post(req.params.id, req.body);
    res.sendStatus(204);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.put('/:id(\\w+)', bodyParser.text(), async (req, res) => {
  try {
    await db.put(req.params.id, req.body);
    res.sendStatus(204);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.delete('/:id(\\w+)', async (req, res) => {
  try {
    await db.delete(req.params.id);
    res.sendStatus(204);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});
