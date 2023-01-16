console.log('Web Serverni boshladik');
const express = require('express');
const app = express();
const router = require('./router.js');
const router_bssr = require('./router_bssr.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const http = require('http');

let session = require('express-session');
const order_itemModel = require('./schema/order_item.model.js');
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
	uri: process.env.MONGO_URL,
	collection: 'session',
});

// 1 Kirish kodlari
app.use(express.static('public'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		credentials: true,
		origin: true,
	}),
);
app.use(cookieParser());

// 2 Session kodlari
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		cookie: {
			maxAge: 1000 * 60 * 30, //for 30 minutes
		},
		store: store,
		resave: true,
		saveUninitialized: true,
	}),
);

app.use(function (req, res, next) {
	res.locals.member = req.session.member;
	next();
});

// 3 Views kodlar
app.set('views', 'views');
app.set('view engine', 'ejs');

// 4 Routing kodlar
app.use('/resto', router_bssr);
app.use('/', router);

const server = http.createServer(app);

/** SOCKET.IO BACKEND SERVER */
const io = require('socket.io')(server, { 
	serverClient: false, 
	origins: '*:*', 
	transport: ['websocket', 'xhr-polling'],
 });

let online_users = 0;
 io.on('connection', function(socket){
	online_users++;
	console.log("New user, total:", online_users);
	socket.emit("greetMsg", {text: "wellcome"});
	io.emit("infoMsg", {total: online_users});

	socket.on("disconnect", function() {
		online_users--;
		socket.broadcast.emit("infoMsg", {total: online_users});
		console.log("client disconnected, total:", online_users );
	});

	socket.on("createMsg", function (data) {
		console.log(data);
		io.emit("newMsg", data);
	});

 });
 /** SOCKET.IO BACKEND SERVER */

module.exports = server;
