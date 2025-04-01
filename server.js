// ********** Second Iteration (Express) ********** //
const express = require('express');

const app = express();

// Individual app.get/put/post/delete, parsed file
app.get('/', (req, res) => {
	const user = {
		name: 'Sally',
		hobby: 'Soccer',
	};
  // Automatically does JSON.stringify(user)
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
