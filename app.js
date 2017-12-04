// use express
const express = require('express');

const app = express();

// define static folder for the testing html
app.use(express.static('static', { extensions: ['html'] }));

// define api folder
app.use('/api', require('./api'));

// have support for different port, default to 8080
const port = process.env.PORT || 8080;

// run app
app.listen(port, (err) => {
  if (err) console.log('error', err);
  else console.log(`app listening on port ${port}`);
});
