	
const express = require('express');
const app = express();

const todos = require('./todos.json');

let idCount = todos.length;

app.use(express.static('public'));
app.use(express.json());
  
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = req.body;
  todo.id = ++idCount;

  todos.push(todo);

  res.status(201).json(todo);
});

app.delete('/todos/:id', (req, res) => {
  //req.params.id;
});
  
app.listen(3000);