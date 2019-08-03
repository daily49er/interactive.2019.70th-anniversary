const router = require('express').Router();
let Staff = require('../models/staff.model')

// First endpoint, handles GET request
router.route('/').get((req, res) => {
    // get list of all staff, returns a promise in JSON format 
    Staff.find()
    .then(staff => res.json(staff))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST request
router.route('/add').post((req, res) => {
    const name = req.body.name;
    // const linkedin = req.body.social.linkedin;
    // const twitter = req.body.social.twitter;
    // const instagram = req.body.social.instagram;
    // const github = req.body.social.github;
    const newStaff = new Staff({
        name
        // linkedin,
        // twitter,
        // instagram,
        // github,
    });
   

    newStaff.save()
    .then(() => res.json('Staff member added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Export router
module.exports = router;