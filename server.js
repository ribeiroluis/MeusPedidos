var express = require('express');
var app = express(); 					      // create our app w/ express
var port = process.env.PORT || 3000; 	      // set the port
var bodyParser = require('body-parser'); 	  // pull information from HTML POST (express4)
var nodemailer = require('nodemailer');

app.use(express.static(__dirname + '/public')); 				// set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({ 'extended': 'true' })); 		// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

var auth = {
            user: '',
            pass: ''
        }

var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: auth
    });

// GET method route
app.get('/get', function (req, res) {
    console.log("get");
    res.send('GET request to the homepage');
});

// POST method route
app.post('/sendEmail', function (req, res) {
    var mailOptions = {
        from: auth.user, // sender address
        to: req.body.email, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.emailText, // plaintext body
        //html: '<b>'+req.body.emailText+'</b>' // html body
    };   
    var body = req.body;
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(500).send('Something broke!');
            return console.error(error);
        }
        res.status(200).send('Email sent OK!');
        console.info('Message sent: ' + info.response);
    });
});

app.listen(port);
console.log("App listening on port " + port);
