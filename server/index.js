const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const rawData = fs.readFileSync('data.json');
const todos = JSON.parse(rawData);

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
	res.send(todos);
});

app.post('/todos', (req, res) => {
	console.log(req.body);
	todos.push(req.body.todo);
	fs.writeFileSync('data.json', JSON.stringify(todos));

	res.send(todos);
});

app.delete('/todos/:index', (req, res) => {
	todos.splice(req.params.index, 1);
	fs.writeFileSync('data.json', JSON.stringify(todos));

	res.send(todos);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
