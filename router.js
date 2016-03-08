var express = require('express');
var router 	= express.Router();
var bodyParser = require('body-parser');

// middleware that is specific to this router
router.use(function(req, res, next) {
  next();
});

//['Desgin', 'SASS/CSS', 'Back-End', 'JavaScript']
router.get('/', function(req, res) {
	var skillsList = [
		{
			id: 1,
			title: 'UX Design',
			desc: 'My experiences, trails and tripulation with creating an interface for users.',
			buttonTitle: 'See Detail'
		},
		{
			id: 2,
			title: 'SASS/CSS',
			desc: 'UX being transfered to the page in an understanding of data, and user needs.',
			buttonTitle: 'Example'
		},
		{
			id: 3,
			title: 'Back-End',
			desc: 'Take a peek at what happens behind the scenes or my explorations in Node.',
			buttonTitle: 'Work and Code'
		},
		{
			id: 4,
			title: 'JavaScript',
			desc: 'Java != JavaScript.\nNow that is over let us talk about the role of JS in development.',
			buttonTitle: 'See More'
		}
	];

	var workList = [
		{
			id: 1,
			position: 'User interface Developer',
			company: 'FirstBank',
			website: 'https://www.efirstbank.com',
			desc: '',
			skills: 'JavaScript, SASS, HTML, Apache, XML/XSLT'
		},
		{
			id: 2,
			position: 'Freelance - Mobile and Web Developer',
			company: 'Freelance',
			desc: '',
			skills: 'Objective-C, C++, JavaScript, XML, CSS'
		}
	];

	res.render('index.jade', {skillList: skillsList, work: workList});
});

router.post('/contact', function(req, res) {
	var contactName = req.body.name;
	var contactEmail = req.body.email;
	var contactPhone = req.body.phone;
	/* Will then need to update a database */
	/* After DB created create a job so once a day an update will send to email of all contacts (if new ones exist) */
	res.send({success: 'Thank you ' + contactName + ', your message has been recieved.  Please expect a reply to ' + contactEmail +' at some point in the next few days'});
});

module.exports = router;