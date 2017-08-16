const express = require('express');
const app = express();
const jsonfile = require('jsonfile');

const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('views', './templates');
app.set('view engine', 'mustache');

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({
  extended: false
}));

const todoList = [
  "add all the things!",
  "set up git for this",
  "set up npm and other stuff",
  "call your mom",
];

const compleatedItems = [
  "called dad",
  "played video games"
]
app.get('/', function(req, res) {
  res.render('todo', {
    todo: todoList,
    compleated: compleatedItems,
  });
});
app.post("/additem", function(req, res) {
  todoList.push(req.body.todoItem);
  console.log(req.body.todoItem)
  res.redirect('/');
});
app.post("/removeitem", function(req, res) {
  compleatedItems.push(req.body.delThis);
  todoList.splice(todoList.indexOf(req.body.delThis), 1);
  res.redirect('/');
});

app.listen(3000, function() {
  console.log('Todo app server is ready!');
});
