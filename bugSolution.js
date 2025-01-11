const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/data', (req, res) => {
  const data = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };
  res.json(data); //Corrected JSON response
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});