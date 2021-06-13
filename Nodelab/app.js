// // console.log('Hello World');
// const os = require('os');
//
// console.log('Architecture ' + os.arch());
// for (const cpu of os.cpus()) {
//     console.log(cpu);
// }
// // console.log('CPUs ' + os.cpus().length);
// console.log('OS ' + os.platform());
// console.log('OS ' + os.uptime());

// const fs = require('fs');

// const fileName = __dirname + '/test.txt';

// fs.readFile('test.txt', (err, data) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log(data.toString());
// });

// const data = fs.readFileSync('test.txt');
// console.log(data.toString());

// const fs = require('fs');
//
// const readStream = fs.createReadStream('test.txt');
// const writeStream = fs.createWriteStream('copy-test.txt');

const http = require('http');

// http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1>Hello World</h1>');
//     res.end();
// }).listen(3000);

// http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1>Hello World</h1>');
//     res.end();
// }).listen(3000,err=> {
//     if (err){
//         console.log(err);
//         return;
//     }
//
//     console.log('Server is listening on port 3000');
// });

// http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     switch (req.method) {
//         case 'GET':
//             res.write('<h1>Hello World Get</h1>');
//             res.end();
//             break;
//         case 'POST':
//             req.on('data', data => {
//                 res.write('<h1>Hello ' + data + '</h1>');
//                 res.end();
//             });
//             break;
//     }
// }).listen(3000, (err) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log('Server is listening to port 3000')
// })

















