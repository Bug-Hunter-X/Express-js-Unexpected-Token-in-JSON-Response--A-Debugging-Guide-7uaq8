const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error: Unexpected token in JSON response
//This error might occur if your Express.js application sends a JSON response with an unexpected token, such as a comma after the last element, or when you are trying to parse invalid JSON data from an external source. 
//Example scenario:  Let's say we have a route that's supposed to return JSON:

app.get('/data', (req, res) => {
  const data = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };

  //If you accidentally add a trailing comma here:
  // res.json({name: 'John Doe', age: 30, city: 'New York',}); // <---Trailing comma

  res.json(data); //This is correct
});