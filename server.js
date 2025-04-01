// ********** Second Iteration (Express) ********** //
const express = require('express');
const app = express();

// This is how we use middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Individual app.get/put/post/delete, parsed file
app.get('/', (req, res) => {
	res.send('getting root');
});

app.get('/profile', (req, res) => {
	res.send('getting profile');
});

app.post('/profile', (req, res) => {
	console.log(req.body);

	const user = {
		name: 'Sally',
		hobby: 'Soccer',
	};

	res.send(user);
});

app.listen(3000);

/***********************************************************************/
/***********************************************************************/
/***********************************************************************/
// ********** First Iteration ********** //
// import { http } from 'http'; "If you want to use import/ proceeding with commonJS"
// const http = require('http');

// const server = http.createServer((req, res) => {
// 	const user = {
// 		name: 'John',
// 		hobby: 'Skating',
// 	};

// 	res.setHeader('Content-Type', 'application/json');
// 	res.end(JSON.stringify(user));
// });

// server.listen(3000);
