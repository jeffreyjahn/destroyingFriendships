const express = require('express');
const session = require('express-session');
const app = express();
app.set('trust proxy', 1);
app.use(session({
    secret: 'oikjkeqw!@#1kasokcxcKZKPOSAKDPOAWQnef2k4mlemrWEJKEWJFLKDwatSAmfslkdmfaDKAMSKMASLAMOIVCMOICMVLKCXMVEWORINM$KT@$jokwokmlkmlsdlkjfdslkfs',
    resave: false,
    saveUninitialized: true,
}))
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static(path.join(__dirname, './public/dist/public/')));

require('./server_OLD/config/sequelize.js');
require('./server/routes/routes.js')(app);


app.listen(9999, ()=>{
    console.log('Local host listening on port: 9999.')
});





// for sockets
// const server = app.listen(9999);
// const io = require('socket.io')(server);
// var users = [];
// var messages= []; 

// io.on('connection', (socket)=>{
//     socket.on('got_a_new_user', (data)=>{
//         socket.broadcast.emit('greeting', {'new_user': data.name});
//         socket.emit('start', {'messages' :messages});
//     })
//     socket.on('add_message', (data)=>{
//         var name = data.name;
//         var message = data.message;
//         var new_message = {'name': name, 'message':message}
//         messages.push(new_message);
//         io.sockets.emit('new_message',{'message': new_message})
//     })
// })

// To hash passwords!
// bcrypt.hash('password_from_form', 10copy)
// .then(hashed_password => {
	 
// })
// .catch(error => {
	 
// });

// checking hash passwords

// bcrypt.compare('password_from_form', 'stored_hashed_password')
// .then( result => {
	 
// })
// .catch( error => {
	 
// })