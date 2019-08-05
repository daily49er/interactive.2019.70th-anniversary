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
    const title = req.body.title;
    const photo = req.body.photo;
    const social = req.body.social;
    const linkedin = req.body.linkedin;
    const twitter = req.body.twitter;
    const instagram = req.body.instagram;
    const github = req.body.github;
    const newStaff = new Staff({
        name,
        title,
        photo,
        social,
        linkedin,
        twitter,
        instagram,
        github,
    });
   

    newStaff.save()
    .then(() => res.json('Staff member added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Export router
module.exports = router;