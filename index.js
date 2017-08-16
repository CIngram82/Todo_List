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

let todos;

jsonfile.readFile('templates/data.json', function (error, obj) {
  todos = obj;
});

app.get('/', function(req, res) {
  res.render('todo', {
    todo: todos,
  });
});
app.post("/additem", function(req, res) {
  // Add item to the json file

console.log(res.body.todoItem);
  // jsonfile.writeFile(file, obj, {flag: 'a'}, function (err) {
  // console.error(err)
// })
  res.redirect('/');
});
app.post("/removeitem", function(req, res) {
// find item in json file and change complited to true

  res.redirect('/');
});

app.listen(3000, function() {
  console.log('Todo app server is ready!');
});
