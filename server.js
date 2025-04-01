/***********************************************************************/
/***********************************************************************/
/***********************************************************************/
// ******** Santa's Node Helper ******** //
const fs = require('fs');
let floor = 0;

fs.readFile('./input.txt', (err, data) => {
	console.time('Santa');
	if (err) {
		console.log(err);
	}

	const dataString = data.toString();

	for (let i = 0; i < data.length; i++) {
		if (dataString[i] === '(') {
			floor += 1;
		} else {
			floor -= 1;
		}
    if (floor === -1) {
      console.log('position: ', i + 1);
      break;
    }
	}
	console.log(floor);
	console.timeEnd('Santa');
});

// ********** Second Iteration (Express) ********** //
// const express = require('express');
// const app = express();

// // This is how we use middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Individual app.get/put/post/delete, parsed file
// app.get('/', (req, res) => {
// 	res.send('getting root');
// });

// app.listen(3000);

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
