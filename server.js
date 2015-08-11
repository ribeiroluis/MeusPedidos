var express  = require('express');
var app      = express(); 					// create our app w/ express
var port  	 = process.env.PORT || 3000; 	// set the port
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var nodemailer = require('nodemailer');

app.use(express.static(__dirname + '/public')); 				// set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'juanbondbr@gmail.com',
        pass: '..'
    }
});
var mailOptions = {
    from: 'Luis Ribeiro ✔ <juanbondbr@gmail.com>', // sender address
    to: 'ribeiro.luis@hotmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

// GET method route
app.get('/get', function (req, res) {
  console.log("get");
  res.send('GET request to the homepage');
});

// POST method route
app.post('/sendEmail', function (req, res) {
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        res.status(500).send('Something broke!');
        return console.error(error);
    }
    res.status(200).send('Email sent OK!');
    console.info('Message sent: ' + info.response);   
});
});

app.listen(port);
console.log("App listening on port " + port);
