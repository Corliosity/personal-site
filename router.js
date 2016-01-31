var express = require('express');
var router 	= express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
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
	]

	res.render('index.jade', {skillList: skillsList});
});

module.exports = router;