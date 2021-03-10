const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/w', (req, res) => {
    res.json({ans:2})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
